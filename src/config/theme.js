/**
 * پیکربندی تم تاریک مدرن با الهام از Glassmorphism برای GrapesJS Studio SDK
 */
export const studioTheme = {
  colors: {
    global: {
      background1: '#090d16',        // لایه اصلی پس‌زمینه پنل‌ها و تب‌ها
      background2: '#0f172a',        // پس‌زمینه هدرها، کارت‌ها و ابزارها
      background3: '#1e293b',        // پس‌زمینه فیلدهای ورودی و دکمه‌های فرعی
      backgroundHover: '#334155',    // هاور المان‌ها
      border: 'rgba(148, 163, 184, 0.15)', // خطوط حاشیه ظریف و مدرن
      focus: '#6366f1',              // رنگ فوکوس آبی-بنفش
      placeholder: '#64748b',        // متن کم‌رنگ پیش‌فرض
      text: '#f8fafc'                // رنگ متن خوانا و شفاف
    },
    primary: {
      background1: '#4f46e5',        // دکمه اصلی (Indigo 600)
      background2: '#6366f1',        // حالت فعال (Indigo 500)
      background3: '#4338ca',        // پس‌زمینه دکمه‌های تیره
      backgroundHover: '#818cf8',    // هاور دکمه‌ها
      text: '#ffffff'
    },
    component: {
      background1: 'rgba(99, 102, 241, 0.2)', // کادر دور کامپوننت انتخابی
      background2: '#6366f1',
      background3: '#818cf8',
      text: '#ffffff'
    },
    selector: {
      background1: '#1e1b4b',
      background2: '#4f46e5',
      text: '#e0e7ff'
    },
    symbol: {
      background1: '#064e3b',
      background2: '#10b981',
      text: '#ecfdf5'
    }
  }
};

export default studioTheme;
