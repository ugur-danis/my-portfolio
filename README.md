# 🚀 Uğur Danış - Portfolio

Modern, responsive ve performanslı bir kişisel portfolio web sitesi. Next.js 15, TypeScript, Tailwind CSS ve modern web teknolojileri kullanılarak geliştirilmiştir.

## ✨ Özellikler

- 🌐 **Çoklu Dil Desteği** - Türkçe ve İngilizce
- 🌙 **Dark/Light Mode** - Otomatik tema değiştirme
- 📱 **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- ⚡ **Performans Optimizasyonu** - Hızlı yükleme ve smooth animasyonlar
- 🎨 **Modern UI/UX** - Temiz ve kullanıcı dostu arayüz
- 🔧 **Modüler Yapı** - Yeniden kullanılabilir bileşenler
- 📊 **SEO Optimizasyonu** - Arama motorları için optimize edilmiş

## 🛠️ Teknolojiler

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animasyonlar
- **Lucide React** - İkonlar

### UI/UX
- **Radix UI** - Erişilebilir bileşenler
- **Class Variance Authority** - Bileşen varyantları
- **Tailwind Merge** - CSS sınıf birleştirme

### Çoklu Dil
- **next-intl** - Uluslararasılaştırma

### Geliştirme Araçları
- **ESLint** - Kod kalitesi
- **PostCSS** - CSS işleme
- **Turbopack** - Hızlı geliştirme

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js app router
├── components/            # React bileşenleri
│   ├── ui/               # Ortak UI bileşenleri
│   ├── layout/           # Layout bileşenleri
│   ├── pages/            # Sayfa bileşenleri
│   └── icons/            # İkon bileşenleri
├── context/              # React context'leri
├── hooks/                # Custom hooks
├── types/                # TypeScript tip tanımları
├── constants/            # Sabitler
├── lib/                  # Utility fonksiyonları
├── i18n/                 # Çoklu dil dosyaları
└── styles/               # Global stiller
```

## 🚀 Kurulum

1. **Projeyi klonlayın**
```bash
git clone https://github.com/username/my-portfolio.git
cd my-portfolio
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 📦 Build ve Deploy

### Production Build
```bash
npm run build
```

### Production Sunucusu
```bash
npm start
```

### Linting
```bash
npm run lint
```

## 🎨 Bileşen Sistemi

### UI Bileşenleri
- `Button` - Çoklu varyant ve boyut desteği
- `Card` - Esnek kart bileşeni
- `Input` - Form giriş alanları
- `Badge` - Etiket ve durum göstergeleri

### Layout Bileşenleri
- `Header` - Navigasyon ve tema değiştirme
- `Profile` - Kişisel bilgiler ve sosyal medya
- `AnimatedPage` - Sayfa geçiş animasyonları

### Sayfa Bileşenleri
- `About` - Hakkımda sayfası
- `Resume` - Özgeçmiş ve yetenekler
- `Projects` - Proje portföyü
- `Contact` - İletişim formu

## 🌐 Çoklu Dil Desteği

Proje `next-intl` kullanarak çoklu dil desteği sağlar:

- **Türkçe** (`tr`) - Varsayılan dil
- **İngilizce** (`en`) - İkinci dil

Dil dosyaları `locales/` klasöründe bulunur.

## 🎯 Özellikler Detayı

### Responsive Tasarım
- Mobile-first yaklaşım
- Breakpoint'ler: sm, md, lg, xl, 2xl
- Esnek grid sistemi

### Performans
- Image optimization
- Code splitting
- Lazy loading
- Bundle analizi

### Erişilebilirlik
- ARIA labels
- Keyboard navigation
- Screen reader desteği
- Color contrast

### SEO
- Meta tags
- Open Graph
- Structured data
- Sitemap

## 🔧 Geliştirme

### Yeni Bileşen Ekleme
1. `src/components/ui/` altında bileşen oluşturun
2. TypeScript interface'leri tanımlayın
3. Storybook ile test edin
4. Export edin

### Yeni Sayfa Ekleme
1. `src/components/pages/` altında sayfa oluşturun
2. `src/app/[locale]/` altında route ekleyin
3. Çeviri dosyalarına ekleyin
4. Navigation'a ekleyin

### Stil Değişiklikleri
- Tailwind CSS kullanın
- CSS custom properties
- Design system'e uygun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Email**: ugurdnis@gmail.com
- **LinkedIn**: [Uğur Danış](https://www.linkedin.com/in/uğurdanis/)
- **GitHub**: [ugur-danis](https://github.com/ugur-danis)
- **Instagram**: [_ugurdanis](https://www.instagram.com/_ugurdanis/)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
