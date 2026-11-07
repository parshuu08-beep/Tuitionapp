# design.md

Feel: saaf, bharosemand, simple. Owner busy hota hai, isliye har screen pe ek hi kaam saaf dikhe.

## 1. Fonts
- **Heading aur body:** `Inter` (Google Fonts), weights 400, 500, 600, 700
- Fallback: `system-ui, -apple-system, sans-serif`
- Sizes: body 16px, small 14px, heading 24px, page title 28px, big numbers (dashboard) 32px
- Line height 1.5

## 2. Colors (default theme)
Ye `theme.css` me CSS variables ban jaayenge. Owner `--primary` apne hisaab se badal sakta hai.

| Naam | Value | Kaam |
|---|---|---|
| `--primary` | `#4F46E5` | buttons, links, active (owner badal sakta hai) |
| `--primary-dark` | `#4338CA` | hover |
| `--bg` | `#F8FAFC` | page background |
| `--surface` | `#FFFFFF` | cards |
| `--text` | `#0F172A` | main text |
| `--text-muted` | `#64748B` | secondary text |
| `--border` | `#E2E8F0` | lines, input border |
| `--success` | `#16A34A` | paid, present |
| `--warning` | `#D97706` | due soon |
| `--danger` | `#DC2626` | late, absent, delete |

Rule: sirf in colors ka use. Naya color nahi.

## 3. Layout
- **Mobile first** (375px se shuru), phir tablet aur desktop.
- Owner desktop: left sidebar + content. Mobile: bottom navigation bar.
- Parent: sirf mobile style, bottom nav (Home, Attendance, Fees, Reports).
- Content max width 1100px, center.
- Spacing scale: 4, 8, 12, 16, 24, 32px.
- Corner radius: cards 12px, buttons 8px.
- Shadow halka: `0 1px 3px rgba(0,0,0,0.08)`.

## 4. Components
- **Button:** primary (filled), secondary (outline), danger. Height 44px (touch friendly).
- **Card:** white, border, halka shadow. Dashboard numbers cards me.
- **Status badge:** Paid (green), Pending (orange), Late (red). Late wale me "5 days late" likho.
- **Table:** mobile pe cards me badal jaye.
- **Attendance:** badi P/A buttons, ek tap me toggle (P green, A red).
- **Progress bar:** test marks ke liye, rounded.
- **Form:** label upar, error neeche red text me. Phone field me country code dropdown + flag.
- **Toast:** kaam hone par chhota message.

## 5. States (har page pe)
- Loading: skeleton ya spinner
- Empty: halka icon + "Abhi koi student nahi. Add karo." jaisa line + button
- Error: saaf message + retry

## 6. Branding (owner ke control me)
- Logo (top left aur login page pe)
- Primary color
- Institute ka naam
- Baaki sab fixed rakho, taaki design kharab na ho.

## 7. Accessibility
- Text aur background ka contrast acha ho.
- Sirf color se matlab mat batao (badge pe text bhi likho).
- Touch targets kam se kam 44px.

## 8. Tone
Simple, chhote shabd. Jargon nahi. Error me "Something went wrong" ke bajay batao kya karna hai.

## 9. 3D aur animation style (education theme)

### Look
- **Soft 3D / clay style**: gol kinaare, halki chamak, pastel gradients. Bahut real ya dark 3D nahi, friendly aur padhai wala feel.
- 3D cheezein sirf **education se related**: kitaabein, graduation cap, pencil, notebook, globe, light bulb, trophy, star.
- Background: indigo se halke purple/blue ka soft gradient, upar halke floating shapes.
- Cards me **glass effect** (halka blur, transparent white) sirf landing aur login pe. Dashboard me plain white cards (saaf aur tez).
- Ek friendly **mascot** (jaise ek chhota 3D owl ya graduation cap wala character) landing/login pe, jo cursor ko follow kare.

### Kahan kitna 3D
| Jagah | Level |
|---|---|
| Landing page hero | **Full 3D**: floating books/cap/globe, mouse ke saath ghoomte, scroll pe move |
| Login / Signup page | **Medium 3D**: mascot ya 1-2 floating objects |
| Owner dashboard, attendance, fees | **Sirf halki animation**, 3D nahi |
| Parent app (mobile) | **Halki animation**, 3D band ya static image |

### Animations jo chahiye
- Page load pe elements ek ke baad ek upar se aate hain (stagger fade-up)
- Scroll pe sections smoothly reveal hote hain (landing page)
- Buttons aur cards pe hover pe halka upar uthna aur shadow
- Dashboard numbers 0 se count-up
- Progress bars smoothly fill hon
- Attendance P/A toggle pe chhota bounce
- Page badalte waqt halka fade
- Saari motion me **ease-in-ease-out**, 200-400ms. Dashboard me animation 300ms se zyada nahi.

### Performance rules (zaroori)
- 3D scene **lazy-load** ho (page pehle khule, 3D baad me).
- Phone ya kamzor device pe 3D ki jagah **static image** dikhao.
- `prefers-reduced-motion` ON ho to animations band.
- Sirf `transform` aur `opacity` animate karo, layout nahi.
- 3D ka total weight kam rakho. Slow net pe bhi pehle text aur buttons dikhne chahiye.
- Koi bhi community 3D scene use karne se pehle uska license check karo.
