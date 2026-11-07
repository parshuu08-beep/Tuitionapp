# architecture.md

## 1. Stack (ye fix hai, AI isko badlega nahi)
| Layer | Choice | Kyun |
|---|---|---|
| Frontend | Plain **HTML + CSS + JavaScript** (multiple files, no framework, no build step) | Tu already .html pe kaam kar chuka hai, hosting free |
| Backend + DB | **Supabase** (Postgres, Auth, Row Level Security, Storage, Edge Functions) | Backend khud nahi banana, SQL tables, security built-in |
| Hosting | Netlify ya Cloudflare Pages | Free, HTTPS automatic |
| Payments | **Abhi tay nahi** (Phase 10 se pehle) | Stripe India naye users ke liye invite-only hai. Options: Dodo Payments, Paddle, Razorpay. Shuru me manual billing |
| Email | Resend ya Supabase Edge Function se | Alerts ke liye |

Supabase JS library CDN se load hogi.

Important: frontend me sirf **anon (public) key** jaayegi. **service_role key kabhi frontend me nahi.**

## 2. Folder structure
```
/index.html            landing page
/login.html            sabka login
/signup.html           sirf owner ke liye
/join.html             invite link se teacher/parent/student join
/owner/                dashboard, students, batches, attendance, fees, tests, settings
/teacher/              attendance, marks
/parent/               child overview, fees, reports
/student/              student view
/assets/css/           theme.css (variables), components.css
/assets/js/
    supabase-client.js   ek hi jagah connection
    auth.js              login, logout, role check
    api.js               saare database calls yahin
    ui.js                toast, modal, loader
    utils.js             phone, currency, date helpers
/supabase/
    schema.sql           saare tables
    policies.sql         RLS rules
/docs/                 6 md files
```

## 3. Components kaise connect hote hain
```
Browser (HTML/JS)
   -> supabase-js (anon key)
        -> Supabase Auth (kaun hai?)
        -> Postgres + RLS (kya dekh sakta hai?)
   -> Edge Functions (secret kaam: email, payment webhook)
Payment provider -> webhook -> Edge Function -> Postgres (institutes.subscription_status badalta hai)
```
Rule: pages seedha database se baat nahi karte, hamesha `api.js` ke through.

## 4. Multi-tenant design
Har institute ek **tenant** hai. Har table me `institute_id` hota hai. RLS ye ensure karta hai ki user sirf apne institute ki rows dekhe.

## 5. Database tables
- **institutes**: id, name, logo_url, primary_color, country, currency, timezone, plan, created_at
- **profiles**: id (auth user id), institute_id, role (owner/teacher/parent/student), full_name, phone_e164
- **batches**: id, institute_id, name, class_name, schedule
- **students**: id, institute_id, batch_id, full_name, class_name, parent_name, parent_phone_e164, parent_user_id (nullable)
- **fees**: id, institute_id, student_id, month, amount, due_date, status (pending/paid/late), paid_at
- **attendance**: id, institute_id, student_id, date, status (P/A)
- **tests**: id, institute_id, batch_id, title, date, max_marks
- **test_results**: id, institute_id, test_id, student_id, marks
- **enquiries**: id, institute_id, name, phone_e164, referred_by_student_id, created_at
- **invites**: id, institute_id, role, code, expires_at, used
- **subscriptions**: institute_id, provider_customer_id, status (trial/active/past_due/cancelled), plan, current_period_end, grace_until

Access lock rule: `status = active` ya `trial` to sab chalega. `past_due` me grace period tak sab chalega aur upar banner dikhega. Grace khatam to **read-only** (dekh sakte hain, naya data nahi daal sakte). Phir bhi pay nahi kiya to **lock** (sirf "Please pay" page). Lock RLS/server side me hoga, sirf frontend me nahi. Data kabhi delete nahi.

## 6. Auth aur role flow
1. Owner sign up -> institute row + profile (role=owner) banti hai.
2. Owner invite code banata hai (role chun ke).
3. Teacher/Parent/Student `join.html` pe code daalke account banata hai. Role invite se aata hai, user chun nahi sakta.
4. Login ke baad `profiles.role` dekh ke sahi folder me redirect.
5. Har page ke start me role check. Phir bhi asli security RLS me hai, kyunki frontend check bypass ho sakta hai.

## 7. RLS ke basic rules
- Sab tables pe RLS **ON**.
- Owner: apne institute ka sab kuch.
- Teacher: apne institute ke students/attendance/marks.
- Parent: sirf apne bachche ka data (`parent_user_id` match).
- Student: sirf apna.
- `role` ya `institute_id` user khud kabhi change nahi kar sakta.

## 8. Automations (baad ke phase me)
Supabase scheduled functions (cron):
- 5 tareekh fee reminder, late walon ko dobara
- Absent mark hote hi alert (database trigger)
- Sunday weekly report
- Payment webhook se receipt + owner alert
