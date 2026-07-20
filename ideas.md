# DOST Alumni Platform - Dizayn Konsepsiyası

## Seçilmiş Dizayn Yanaşması: **Modern Minimal Elegance**

### Dizayn Hərəkatı
Notion, Linear və Microsoft Fluent-dən ilham alan **contemporary minimalism** — saf, boş sahə, düşünülmüş tipografiya və soft vizual hierarxiya ilə premium SaaS estetikası.

### Əsas Prinsiplər
1. **Boşluq Hakimiyyəti**: Geniş boşluq, məqsədli padding — interfeys "nəfəs alır"
2. **Tipografik Hierarxiya**: Böyük, cəsur başlıqlar + oxunaqlı bədən mətni — vizual struktur yaratmaq
3. **Soft Vizual Dərinlik**: Zərif kölgələr, yumşaq sərhədlər, 12px radius kartlar
4. **Məqsədli Rəng**: Əsas rəng #551A8B (premium purple), ağ fon, neytral aksentlər

### Rəng Fəlsəfəsi
- **Əsas**: #551A8B (Deep Purple) — etimad, premium, inovativ
- **Fon**: Ağ (#FFFFFF) — təmizlik, açıqlıq
- **Mətni**: Tünd Slate (#1F2937) — oxunaqlılıq
- **Aksentlər**: Soft Gray (#F3F4F6), Light Purple (#F5F3FF)
- **Hədəf**: Zərif, peşəkar, yüksəkqiymətli SaaS görünüşü

### Tərəf Paradiqması
- **Landing Page**: Asimmetrik hero, sol mətn + sağ illüstrasiya
- **Dashboard**: Mərkəzi 3-kartlı grid, yuxarı nav
- **Səhifələr**: Təmiz kart şəbəkəsi, filter bar, boş sahə

### İmza Elementləri
1. **Soft Shadow Cards**: `shadow-sm` (0 1px 2px rgba(0,0,0,0.05))
2. **Purple Accent Buttons**: #551A8B fon, ağ mətn, hover scale
3. **Large Typography**: Display 32px+, Body 16px, Label 14px

### İnteraksiya Fəlsəfəsi
- Smooth transitions (150-200ms)
- Hover states: subtle scale, color shift
- No jarring animations — elegance through restraint
- Responsive buttons: active state with scale(0.97)

### Animasiya Qidalanması
- Button hover: `scale(1.02)` + color transition (150ms)
- Card hover: subtle shadow increase (150ms)
- Page transitions: fade-in (200ms)
- Respect `prefers-reduced-motion`

### Tipografiya Sistemi
- **Display**: Poppins Bold 32px (başlıqlar)
- **Heading**: Poppins SemiBold 24px (bölüm başlıqları)
- **Body**: Inter Regular 16px (əsas mətn)
- **Label**: Inter Medium 14px (kartlar, düymələr)
- **Caption**: Inter Regular 12px (kömək mətnləri)

### Brend Mahiyyəti
**Bir sətir pozisyonu**: DOST Alumni — volunteer cəmiyyətinin əbədi evini — peşəkar, qonaqpərvər, fəaliyyətə yönəlmiş.

**Şəxsiyyət sifətləri**: Etibarlı, Cəmiyyətçi, Fəaliyyətə Yönəlmiş

### Brend Səsi
- **Başlıqlar**: Təşviqedici, inklüziv, fəaliyyət-mərkəzli
- **CTA**: "Qoşul", "Dəstəkləyə Bilərik", "Kəşf Et"
- **Mikrokopiya**: Təmiz, faydalı, jargonsuz
- **Nümunə Xətlər**:
  - "Bir dəfə Volunteer, Həmişə DOST Ailəsinin Üzvü"
  - "Alumni Cəmiyyətinə Qoşul — Yeni Imkanlar, Əbədi Əlaqələr"

### Wordmark & Logo
**Konsepsiya**: Cəsur, modern "DA" monogram (DOST Alumni) — purple (#551A8B), transparent fonda, 40x40px favicon olaraq istifadə

### İmza Brend Rəngi
**#551A8B** — Deep Purple — bu rəng bütün butonlarda, linklərdə, aksentlərdə istifadə olunacaq

## Stil Qərarları
- Tailwind 4 + shadcn/ui komponentləri
- Lucide React ikonları
- Responsive: Desktop-first (desktop layout tələb olunur)
- Accessibility: WCAG AA contrast, keyboard navigation
- Performance: Minimal JS, CSS-driven animations
