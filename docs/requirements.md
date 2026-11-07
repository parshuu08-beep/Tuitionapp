# requirements.md

## 1. Ye kya hai
TuitionApp ek **SaaS web app** hai coaching institutes ke liye, poori duniya me use hone wala.
Ek hi app, bahut saare institutes. Har institute ka data, logo aur colors alag.

Problem: coaching owners fees, attendance aur test reports WhatsApp/copy me sambhalte hain. Late fees yaad nahi rehti, parents ko khabar nahi hoti.

## 2. Target users
| Role | Kaun | Kya karta hai |
|---|---|---|
| **Owner** | Institute ka malik | Sab kuch control: branding, students, batches, fees, reports, staff |
| **Teacher** | Owner ka add kiya staff | Attendance, tests ke marks |
| **Parent** | Student ke parent | Bachche ki attendance, homework, fees, test report dekhna |
| **Student** | Student (optional login) | Homework, attendance, marks dekhna |
| **Super Admin** | Sirf hum (app ke malik) | Saare institutes, subscriptions dekhna |

Pehla target: chhote/medium coaching institutes (20 se 500 students), kisi bhi desh me.

## 3. Login rules (bahut zaroori)
- Ek hi login page, par har user ka ek **role** hota hai.
- **Sirf Owner self sign up kar sakta hai** ("Start your institute" se). Isse naya institute banta hai.
- Teacher, Parent, Student **kabhi self sign up nahi karte**. Owner invite link ya join code bhejta hai.
- Koi bhi user sirf **apne institute** ka data dekh sakta hai.

## 4. Features

### MVP (pehle ye banega)
1. Login, sign up, roles
2. Institute setup: naam, logo, colors, country, currency, timezone
3. Batches aur Students (naam, class, batch, parent ka phone with country code)
4. Attendance (Present/Absent)
5. Fees: month, amount, due date, paid/late, pending list
6. Owner Dashboard: fees aayi vs pending, total students

### Baad me
7. Weekly Test Report (marks, rank, progress bars)
8. Parent portal (attendance, homework, fees, receipt)
9. Automations: fee reminder, absent alert, Sunday weekly report, payment receipt
10. Refer a friend / enquiries
11. Online fee payment (parents ke liye)
12. Subscription billing (institutes se paisa lena)
13. WhatsApp alerts

## 5. International requirements
- Phone numbers country code ke saath (+91, +1, +44, +971 ...), E.164 format me save.
- Har institute apni **currency aur timezone** set kare.
- Dates, numbers locale ke hisaab se dikhein.
- Pehle English. Baad me aur languages ke liye text alag file me rakho.
- Alerts pehle **email + in-app**. WhatsApp baad me (har country me paid aur mushkil).

## 6. Paisa kaise aayega
- Institutes se monthly subscription.
- **Free**: 25 students tak.
- **Pro**: zyada students, reports, automations, custom branding.
- Shuru ke 3-5 institutes ke liye **manual billing** (bank transfer/invoice), owner ka access hum khud on/off karenge.
- Baad me subscription payment ke liye ek global payment provider (kaun sa, ye abhi tay nahi: Dodo Payments, Paddle ya Razorpay me se, Phase 10 se pehle decide hoga).
- Paisa na aane par access **turant delete nahi**, pehle grace period, phir read-only, phir lock. Data kabhi delete nahi.

## 7. Abhi NAHI banana (scope control)
- Mobile app (Play Store/App Store). Pehle web app / PWA.
- Video classes, live classes, chat.
- Saari languages ek saath.
- Ek saath saare 5 screens.

## 8. Safety first
- Student ka data private hai (bachchon ka data).
- Har table pe access rules (RLS).
- Payment ka koi bhi card data hum apne paas save nahi karenge.
- Success ka matlab: ek real institute use kare aur kisi ka data kisi dusre ko na dikhe.
