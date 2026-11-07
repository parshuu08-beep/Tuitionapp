# phases.md

Rule: **ek phase pura test karo, phir agla.** Har phase ke end me "Done when" check hona chahiye. Check pass nahi hua to agle phase me mat jao.

## Phase 0: Setup
- [ ] Supabase project banao
- [ ] GitHub repo + folder structure (`architecture.md` jaisa)
- [ ] Netlify ya Cloudflare Pages pe empty site live
- [ ] `supabase-client.js` me connection
**Done when:** live link khulta hai aur console me Supabase connect ka message aata hai.

## Phase 1: Auth aur roles
- [ ] Tables: institutes, profiles
- [ ] Owner sign up ("Start your institute") se institute banta hai
- [ ] Login, logout
- [ ] Login ke baad role ke hisaab se redirect
- [ ] RLS: institutes aur profiles
**Done when:** do alag owner banao, dono ek dusre ka institute nahi dekh paate.

## Phase 1b: Landing aur login page (3D look)
- [ ] `theme.css` me colors, fonts, spacing (design.md ke hisaab se)
- [ ] Landing page: hero with education 3D (floating books/cap/globe), features, pricing placeholder, "Start your institute" button
- [ ] Login/signup page ko naye look me
- [ ] Scroll aur load animations (GSAP)
- [ ] 3D lazy-load, mobile pe static image, reduced-motion support
**Done when:** landing page phone aur laptop dono pe smooth chalta hai, 3D band ho to bhi page sahi dikhta hai, aur login abhi bhi sahi kaam karta hai.

## Phase 2: Institute setup
- [ ] Settings page: naam, logo upload, primary color, country, currency, timezone
- [ ] Logo/color poore app me dikhe
- [ ] Batches add/edit/delete
**Done when:** owner logo badle aur next login pe naya logo aur color dikhe.

## Phase 3: Students aur invites
- [ ] Students add/edit (naam, class, batch, parent phone with country code selector)
- [ ] Phone validation (libphonenumber-js)
- [ ] Invite codes: teacher/parent/student
- [ ] `join.html` se join
**Done when:** parent invite code se join kare to sirf apne bachche ka data dikhe, owner ban nahi sakta.

## Phase 4: Attendance
- [ ] Batch aur date chun ke P/A lagana
- [ ] Attendance history
**Done when:** teacher attendance laga sake aur reload ke baad data wahi rahe.

## Phase 5: Fees
- [ ] Fees banana (month, amount, due date)
- [ ] Pending/late list (kitne din late)
- [ ] Mark paid
**Done when:** pending list sahi dikhe aur paid karte hi list se hat jaye.

## Phase 6: Owner Dashboard
- [ ] Fees aayi vs pending
- [ ] Total students, aaj ki attendance
**Done when:** numbers database ke saath match karein.

>>> **Yahan MVP khatam. Pehle ek real institute se test karwao.** <<<

## Phase 7: Tests aur reports
- [ ] Tests + marks entry, rank, progress bars

## Phase 8: Parent portal
- [ ] Attendance, homework, fees, test report

## Phase 9: Automations
- [ ] Fee reminder (5 tareekh), absent alert, Sunday report, receipt
- [ ] Email pehle, WhatsApp baad me

## Phase 10: Subscription aur payments
- [ ] Pehle: manual billing. Super admin page se hum institute ka `subscription_status` badalte hain
- [ ] Payment provider tay karna (Stripe India invite-only hai; Dodo/Paddle/Razorpay dekhna) aur account verify karwana
- [ ] Subscription (Free/Pro) + webhook se status auto-update
- [ ] Grace period, read-only mode, lock page (data delete nahi)
- [ ] Student limit enforce
- [ ] Parents ke liye fee payment

## Phase 11: Polish aur launch
- [ ] Security review (RLS har table)
- [ ] Mobile testing, error states
- [ ] Privacy policy, terms
- [ ] PWA (phone me install)
- [ ] Pehle 3-5 institutes ko beta
