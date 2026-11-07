# rules.md

AI ke liye hukum: kuch bhi likhne se pehle ye file aur baaki 5 files padho. Apni marzi nahi chalani.

## 1. Kaam karne ke rules
1. **Ek baar me sirf ek phase ka ek task.** `phases.md` me jo current task hai wahi karo.
2. Task shuru karne se pehle batao kya karoge, kaun si files badlogi.
3. Jo maanga nahi wo mat banao. Extra feature, extra page, extra library nahi.
4. Koi bhi purani working file bina bataye overwrite ya delete mat karo.
5. Task khatam hone par `memory.md` update karo.
6. Kuch samajh na aaye to anuman mat lagao, pucho.

## 2. Tech rules
- Sirf **HTML, CSS, vanilla JavaScript** (ES modules). React/Vue/Tailwind/jQuery nahi.
- Backend sirf **Supabase**. Naya backend ya server mat banao.
- Allowed libraries: `supabase-js`, `libphonenumber-js` (phone validation), `Chart.js` (charts), Google Fonts. Kuch aur chahiye to pehle pucho.
- Animation/3D ke liye allowed (CDN se, sirf landing/login pe): `GSAP` + `ScrollTrigger` (animations), `Spline viewer` (3D scene embed), `Lottie` (animated icons). `Three.js` sirf tab jab Spline kaam na kare, aur pehle pucho.
- 3D sirf landing aur login page pe. Dashboard, attendance, fees pages pe 3D nahi, wahan sirf halki CSS animation.
- 3D hamesha lazy-load, mobile pe static image fallback, `design.md` ke section 9 ke rules follow karo.
- Ek giant file nahi. Har page ki apni HTML file, shared code `assets/js/` me.
- Saare database calls sirf `api.js` me.

## 3. Coding standards
- File aur folder naam: lowercase, dash se (`fees-pending.html`).
- JS variables: `camelCase`. Database columns: `snake_case`.
- Functions chhote rakho, ek function ek kaam.
- Har function ke upar ek line ka comment: ye kya karta hai.
- Hardcoded colors/fonts nahi, sirf `theme.css` ke variables.
- Hardcoded text ya currency symbol nahi, utils se format karo.
- Console.log production me nahi chhodna.

## 4. Security rules (sabse zaroori)
- **service_role key kabhi frontend me nahi**, kisi file me bhi nahi jo browser tak jaaye.
- Secret keys sirf Supabase Edge Function ke environment me.
- Har table pe RLS ON. Naya table banao to policy bhi saath me.
- Role aur institute_id kabhi user ke input se mat lo. Hamesha `profiles` table se.
- Frontend ka role check sirf UI ke liye hai, asli security RLS hai.
- Users ka text kabhi `innerHTML` me seedha mat daalo (XSS). `textContent` use karo.
- Passwords kabhi save/log nahi. Card data kabhi apne paas nahi, payment provider handle karega.
- Phone numbers hamesha E.164 format me save (`+14155552671`).

## 5. International rules
- Currency, date, timezone institute ki settings se aayegi.
- Koi bhi India-specific cheez hardcode nahi (+91, rupee, UPI). UPI sirf ek optional payment method hoga.
- Saare UI text ek jagah (`assets/js/text-en.js`) me, taaki baad me translate ho sake.

## 6. UI rules
- `design.md` ko follow karo. Apne se naye colors, fonts mat lao.
- Mobile first. Pehle 375px screen pe sahi dikhna chahiye.
- Har page pe loading, empty aur error state.

## 7. Kabhi mat karo
- Bina bataye database schema badalna.
- Test data ko real data ke saath mix karna.
- Ek task me 3 se zyada files badalna (bataye bina).
- Kisi bhi phase ko skip karna.
