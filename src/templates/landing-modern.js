/**
 * قالب لندینگ پیج مدرن، شیشه‌ای و کاملاً بومی (فارسی) با استانداردهای مدرن وب
 */
export const modernLandingHtml = `
<div style="font-family: 'Vazirmatn', system-ui, -apple-system, sans-serif; color: #0f172a; background-color: #f8fafc; min-height: 100vh; margin: 0; padding: 0; direction: rtl; line-height: 1.6; overflow-x: hidden;">

  <!-- Decorative Ambient Mesh Gradient Background -->
  <div style="position: absolute; top: 0; left: 0; right: 0; height: 650px; background: radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 40%, rgba(236, 72, 153, 0.12) 0%, transparent 45%), radial-gradient(circle at 50% 10%, rgba(139, 92, 246, 0.1) 0%, transparent 60%); pointer-events: none; z-index: 0;"></div>

  <!-- Header / Navigation -->
  <header style="position: sticky; top: 0; z-index: 100; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); background: rgba(255, 255, 255, 0.85); border-bottom: 1px solid rgba(226, 232, 240, 0.8); transition: all 0.3s ease;">
    <div style="max-width: 1240px; margin: 0 auto; padding: 1.1rem 2rem; display: flex; justify-content: space-between; align-items: center;">
      
      <!-- Brand Logo -->
      <div style="display: flex; align-items: center; gap: 0.85rem;">
        <div style="width: 42px; height: 42px; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; box-shadow: 0 8px 20px -4px rgba(99, 102, 241, 0.5);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <div style="display: flex; flex-direction: column;">
          <span style="font-size: 1.35rem; font-weight: 800; letter-spacing: -0.02em; background: linear-gradient(135deg, #0f172a 0%, #334155 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">المنتور (Elementor)</span>
          <span style="font-size: 0.72rem; color: #64748b; font-weight: 600; margin-top: -2px;">پلتفرم طراحی دیداری وب</span>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav style="display: flex; gap: 2.25rem; font-size: 0.95rem; font-weight: 600; color: #475569;">
        <a href="#features" style="color: inherit; text-decoration: none; transition: color 0.2s ease;">ویژگی‌ها</a>
        <a href="#bento" style="color: inherit; text-decoration: none; transition: color 0.2s ease;">امکانات هوشمند</a>
        <a href="#pricing" style="color: inherit; text-decoration: none; transition: color 0.2s ease;">تعرفه‌ها</a>
        <a href="#testimonials" style="color: inherit; text-decoration: none; transition: color 0.2s ease;">نظرات طراحان</a>
      </nav>

      <!-- Action Buttons -->
      <div style="display: flex; gap: 0.85rem; align-items: center;">
        <a href="#login" style="padding: 0.65rem 1.25rem; color: #334155; text-decoration: none; font-size: 0.92rem; font-weight: 600; border-radius: 10px; transition: background 0.2s ease;">ورود</a>
        <a href="#cta" style="padding: 0.7rem 1.6rem; background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%); color: white; text-decoration: none; border-radius: 12px; font-size: 0.92rem; font-weight: 700; box-shadow: 0 6px 18px -2px rgba(79, 70, 229, 0.4); transition: transform 0.2s ease, box-shadow 0.2s ease;">شروع رایگان</a>
      </div>

    </div>
  </header>

  <!-- Hero Section -->
  <section style="position: relative; padding: 5.5rem 1.5rem 4.5rem 1.5rem; text-align: center; max-width: 1080px; margin: 0 auto; z-index: 1;">
    
    <!-- Announcement Badge -->
    <div style="display: inline-flex; align-items: center; gap: 0.65rem; background: rgba(238, 242, 255, 0.85); backdrop-filter: blur(8px); color: #4338ca; padding: 0.45rem 1.25rem; border-radius: 9999px; font-size: 0.88rem; font-weight: 600; margin-bottom: 2rem; border: 1px solid rgba(199, 210, 254, 0.8); box-shadow: 0 4px 12px rgba(99, 102, 241, 0.08);">
      <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #6366f1; box-shadow: 0 0 8px #6366f1;"></span>
      <span>نسخه ۲.۰ رونمایی شد</span>
      <span style="opacity: 0.4;">|</span>
      <span>سریع‌ترین صفحه‌ساز بصری فارسی</span>
    </div>

    <!-- Main Heading -->
    <h1 style="font-size: 3.6rem; font-weight: 900; line-height: 1.28; color: #0f172a; margin: 0 0 1.75rem 0; letter-spacing: -0.03em;">
      طراحی صفحات وب بدون مرز؛ <br />
      <span style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 45%, #ec4899 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">خلاقانه، واکنش‌گرا و فوق‌سریع</span>
    </h1>

    <!-- Subtitle -->
    <p style="font-size: 1.25rem; color: #475569; line-height: 1.85; max-width: 780px; margin: 0 auto 3rem auto; font-weight: 400;">
      با رابط کاربری کاملاً بومی فارسی و ابزارهای پیشرفته بصری، وب‌سایت‌هایی چشم‌نواز خلق کنید. روی هر المان دوبار کلیک کرده تا متن و استایل آن را تغییر دهید، یا بلاک‌های دلخواه را به صفحه بکشید.
    </p>

    <!-- Hero CTA Actions -->
    <div style="display: flex; gap: 1.25rem; justify-content: center; align-items: center; flex-wrap: wrap;">
      <a href="#action" style="padding: 1.05rem 2.6rem; background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%); color: white; text-decoration: none; border-radius: 14px; font-weight: 700; font-size: 1.1rem; box-shadow: 0 12px 28px -6px rgba(79, 70, 229, 0.45); display: inline-flex; align-items: center; gap: 0.6rem;">
        <span>شروع طراحی وب‌سایت</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(180deg);">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
      <a href="#bento" style="padding: 1.05rem 2.2rem; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(8px); color: #334155; text-decoration: none; border-radius: 14px; font-weight: 700; font-size: 1.1rem; border: 1px solid #e2e8f0; box-shadow: 0 4px 14px rgba(0,0,0,0.04);">
        مشاهده ویژگی‌ها و بلاک‌ها
      </a>
    </div>

    <!-- Trust Badges & Stats -->
    <div style="margin-top: 4.5rem; display: flex; justify-content: center; gap: 3.5rem; flex-wrap: wrap; border-top: 1px solid #e2e8f0; padding-top: 2.5rem;">
      <div style="text-align: center;">
        <div style="font-size: 2rem; font-weight: 900; color: #0f172a;">+۲۵,۰۰۰</div>
        <div style="font-size: 0.9rem; color: #64748b; font-weight: 500; margin-top: 0.25rem;">صفحه طراحی شده</div>
      </div>
      <div style="text-align: center;">
        <div style="font-size: 2rem; font-weight: 900; color: #4f46e5;">۹۹.۸٪</div>
        <div style="font-size: 0.9rem; color: #64748b; font-weight: 500; margin-top: 0.25rem;">رضایت طراحان وب</div>
      </div>
      <div style="text-align: center;">
        <div style="font-size: 2rem; font-weight: 900; color: #ec4899;">۰.۲ ثانیه</div>
        <div style="font-size: 0.9rem; color: #64748b; font-weight: 500; margin-top: 0.25rem;">سرعت بارگذاری بوم</div>
      </div>
      <div style="text-align: center;">
        <div style="font-size: 2rem; font-weight: 900; color: #10b981;">۱۰۰٪</div>
        <div style="font-size: 0.9rem; color: #64748b; font-weight: 500; margin-top: 0.25rem;">فارسی و راست‌چین</div>
      </div>
    </div>

  </section>

  <!-- Bento Grid Showcase Section -->
  <section id="bento" style="padding: 5rem 1.5rem; max-width: 1200px; margin: 0 auto;">
    
    <div style="text-align: center; margin-bottom: 4rem;">
      <div style="font-size: 0.92rem; font-weight: 700; color: #6366f1; text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.05em;">امکانات متمایز و پیشرفته</div>
      <h2 style="font-size: 2.5rem; font-weight: 900; color: #0f172a; margin: 0 0 1rem 0;">همه ابزارهای حرفه‌ای، یکجا در دستان شما</h2>
      <p style="color: #64748b; font-size: 1.15rem; max-width: 650px; margin: 0 auto;">مهندسی شده برای طراحان، کسب‌وکارها و توسعه‌دهندگانی که به زیبایی و سرعت اهمیت می‌دهند.</p>
    </div>

    <!-- Bento 4-Cards Grid -->
    <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.75rem;">
      
      <!-- Bento Item 1 (Wide Highlight) -->
      <div style="grid-column: span 7; background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%); border: 1px solid #e2e8f0; border-radius: 24px; padding: 2.75rem; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.04); position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="width: 56px; height: 56px; border-radius: 16px; background: #e0e7ff; display: flex; align-items: center; justify-content: center; color: #4338ca; margin-bottom: 1.5rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        </div>
        <div>
          <h3 style="font-size: 1.65rem; font-weight: 800; color: #0f172a; margin: 0 0 0.85rem 0;">ویرایشگر بصری با تفکیک لایه‌ها</h3>
          <p style="color: #64748b; font-size: 1.05rem; line-height: 1.8; margin: 0 0 1.5rem 0;">
            با ساختار درختی DOM و پنل پیشرفته استایل، تمامی ویژگی‌های کدهای CSS مانند سایه‌ها، گرادیانت‌ها، افکت‌های شیشه‌ای و ترنزیشن‌ها را با چند کلیک کنترل کنید.
          </p>
        </div>
        <div style="background: #0f172a; border-radius: 14px; padding: 1.25rem 1.5rem; color: #e2e8f0; font-family: monospace; font-size: 0.9rem; direction: ltr; display: flex; justify-content: space-between; align-items: center;">
          <span style="color: #38bdf8;">const</span> studio = <span style="color: #a855f7;">createStudioEditor</span>({ lang: <span style="color: #4ade80;">'fa'</span> });
          <span style="color: #94a3b8; font-size: 0.75rem;">100% RTL READY</span>
        </div>
      </div>

      <!-- Bento Item 2 (Feature Side Card) -->
      <div style="grid-column: span 5; background: linear-gradient(145deg, #ffffff 0%, #fdf4ff 100%); border: 1px solid #fae8ff; border-radius: 24px; padding: 2.75rem; box-shadow: 0 10px 30px -5px rgba(236, 72, 153, 0.05); display: flex; flex-direction: column; justify-content: space-between;">
        <div style="width: 56px; height: 56px; border-radius: 16px; background: #fdf2f8; display: flex; align-items: center; justify-content: center; color: #db2777; margin-bottom: 1.5rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        </div>
        <div>
          <h3 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin: 0 0 0.85rem 0;">واکنش‌گرایی چندوجهی</h3>
          <p style="color: #64748b; font-size: 1.05rem; line-height: 1.8; margin: 0;">
            با نوار کنترل دستگاه‌ها در بالای صفحه، پیش‌نمایش آنی در موبایل، تبلت و دسکتاپ را مشاهده کرده و برای هر نمایشگر، استایل جداگانه تعریف کنید.
          </p>
        </div>
      </div>

      <!-- Bento Item 3 (Feature Clean Output) -->
      <div style="grid-column: span 5; background: linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%); border: 1px solid #dcfce7; border-radius: 24px; padding: 2.5rem; box-shadow: 0 10px 30px -5px rgba(16, 185, 129, 0.05);">
        <div style="width: 56px; height: 56px; border-radius: 16px; background: #ecfdf5; display: flex; align-items: center; justify-content: center; color: #059669; margin-bottom: 1.5rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin: 0 0 0.85rem 0;">خروجی HTML/CSS پاک</h3>
        <p style="color: #64748b; font-size: 1rem; line-height: 1.8; margin: 0;">
          کدهای تولیدی کاملاً معتبر و سئو شده هستند؛ بدون اضافات پنهان، مناسب برای استقرار مستقیم روی سرور یا تبدیل به کامپوننت‌های فرانت‌اند.
        </p>
      </div>

      <!-- Bento Item 4 (Feature Blocks) -->
      <div style="grid-column: span 7; background: linear-gradient(145deg, #ffffff 0%, #f5f3ff 100%); border: 1px solid #ede9fe; border-radius: 24px; padding: 2.5rem; box-shadow: 0 10px 30px -5px rgba(124, 58, 237, 0.05);">
        <div style="width: 56px; height: 56px; border-radius: 16px; background: #ede9fe; display: flex; align-items: center; justify-content: center; color: #7c3aed; margin-bottom: 1.5rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin: 0 0 0.85rem 0;">بلاک‌های آماده درگ-اند-دراپ</h3>
        <p style="color: #64748b; font-size: 1rem; line-height: 1.8; margin: 0;">
          کارت‌های تعرفه، هدرهای گرافیکی، بخش‌های رضایت مشتریان و فرم‌های تماس را با کشیدن و رها کردن به صفحه اضافه کنید و در چند ثانیه محتوای آن‌ها را سفارشی‌سازی نمایید.
        </p>
      </div>

    </div>

  </section>

  <!-- Pricing Plans Section -->
  <section id="pricing" style="padding: 5rem 1.5rem; max-width: 1180px; margin: 0 auto;">
    
    <div style="text-align: center; margin-bottom: 4rem;">
      <div style="font-size: 0.92rem; font-weight: 700; color: #4f46e5; text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 0.05em;">پلن‌ها و تعرفه‌ها</div>
      <h2 style="font-size: 2.5rem; font-weight: 900; color: #0f172a; margin: 0 0 1rem 0;">سرمایه‌گذاری شفاف و متناسب با رشد شما</h2>
      <p style="color: #64748b; font-size: 1.15rem; max-width: 600px; margin: 0 auto;">شروع کاملاً رایگان بدون نیاز به ثبت کارت بانکی. هر زمان که خواستید ارتقا دهید.</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; align-items: center;">
      
      <!-- Starter Plan -->
      <div style="background: white; border: 1px solid #e2e8f0; border-radius: 22px; padding: 2.5rem 2rem; box-shadow: 0 4px 20px -2px rgba(0,0,0,0.03); transition: transform 0.3s ease;">
        <h3 style="font-size: 1.35rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem 0;">شروع و فردی</h3>
        <p style="color: #64748b; font-size: 0.95rem; margin: 0 0 1.5rem 0;">مناسب پروژه‌های شخصی و تست امکانات المنتور</p>
        <div style="font-size: 2.5rem; font-weight: 900; color: #0f172a; margin-bottom: 1.75rem;">
          رایگان <span style="font-size: 1rem; font-weight: 500; color: #64748b;">/ همیشگی</span>
        </div>
        <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0; display: flex; flex-direction: column; gap: 0.9rem; font-size: 0.95rem; color: #475569;">
          <li style="display: flex; align-items: center; gap: 0.65rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>ساخت تا ۳ صفحه همزمان</span>
          </li>
          <li style="display: flex; align-items: center; gap: 0.65rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>دسترسی به تمام بلاک‌های پایه</span>
          </li>
          <li style="display: flex; align-items: center; gap: 0.65rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>خروجی کد HTML و CSS استاندارد</span>
          </li>
        </ul>
        <a href="#action" style="display: block; text-align: center; padding: 0.85rem; border: 1.5px solid #cbd5e1; color: #334155; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 0.95rem;">شروع بدون هزینه</a>
      </div>

      <!-- Pro Plan (Featured) -->
      <div style="background: linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%); border-radius: 24px; padding: 3rem 2.25rem; color: white; box-shadow: 0 20px 40px -10px rgba(79, 70, 229, 0.4); position: relative; border: 2px solid #6366f1;">
        <div style="position: absolute; top: -14px; right: 2rem; background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%); color: white; padding: 0.35rem 1rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 800; box-shadow: 0 4px 12px rgba(244, 63, 94, 0.4);">
          محبوب‌ترین طراحان
        </div>
        <h3 style="font-size: 1.45rem; font-weight: 800; margin: 0 0 0.5rem 0;">پلن حرفه‌ای (Pro)</h3>
        <p style="color: #cbd5e1; font-size: 0.95rem; margin: 0 0 1.5rem 0;">برای فریلنسرها و تیم‌های خلاق وب</p>
        <div style="font-size: 2.75rem; font-weight: 900; color: #ffffff; margin-bottom: 1.75rem;">
          ۲۹۰,۰۰۰ <span style="font-size: 1rem; font-weight: 500; color: #94a3b8;">تومان / ماه</span>
        </div>
        <ul style="list-style: none; padding: 0; margin: 0 0 2.25rem 0; display: flex; flex-direction: column; gap: 0.9rem; font-size: 0.95rem; color: #e2e8f0;">
          <li style="display: flex; align-items: center; gap: 0.65rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>صفحات و پروژه‌های نامحدود</span>
          </li>
          <li style="display: flex; align-items: center; gap: 0.65rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>دسترسی به تمامی بلاک‌های پیشرفته Bento</span>
          </li>
          <li style="display: flex; align-items: center; gap: 0.65rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>ذخیره‌سازی ابری و تاریخچه تغییرات</span>
          </li>
          <li style="display: flex; align-items: center; gap: 0.65rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>پشتیبانی اولویت‌دار اختصاصی</span>
          </li>
        </ul>
        <a href="#action" style="display: block; text-align: center; padding: 0.95rem; background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%); color: white; text-decoration: none; border-radius: 12px; font-weight: 800; font-size: 1rem; box-shadow: 0 8px 20px rgba(79, 70, 229, 0.4);">خرید پلن حرفه‌ای</a>
      </div>

      <!-- Enterprise Plan -->
      <div style="background: white; border: 1px solid #e2e8f0; border-radius: 22px; padding: 2.5rem 2rem; box-shadow: 0 4px 20px -2px rgba(0,0,0,0.03);">
        <h3 style="font-size: 1.35rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem 0;">سازمانی و آژانس</h3>
        <p style="color: #64748b; font-size: 0.95rem; margin: 0 0 1.5rem 0;">برای شرکت‌های بزرگ با نیاز به سفارشی‌سازی</p>
        <div style="font-size: 2.5rem; font-weight: 900; color: #0f172a; margin-bottom: 1.75rem;">
          تماس <span style="font-size: 1rem; font-weight: 500; color: #64748b;">/ اختصاصی</span>
        </div>
        <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0; display: flex; flex-direction: column; gap: 0.9rem; font-size: 0.95rem; color: #475569;">
          <li style="display: flex; align-items: center; gap: 0.65rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>همکاری تیمی و دسترسی چندکاربره</span>
          </li>
          <li style="display: flex; align-items: center; gap: 0.65rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>اتصال مستقیم به مخزن گیت و CI/CD</span>
          </li>
          <li style="display: flex; align-items: center; gap: 0.65rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>قرارداد سطح خدمات (SLA) ۹۹.۹٪</span>
          </li>
        </ul>
        <a href="#action" style="display: block; text-align: center; padding: 0.85rem; border: 1.5px solid #cbd5e1; color: #334155; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 0.95rem;">درخواست جلسه مشاوره</a>
      </div>

    </div>

  </section>

  <!-- Testimonials Section -->
  <section id="testimonials" style="padding: 5rem 1.5rem; max-width: 1200px; margin: 0 auto; background: rgba(241, 245, 249, 0.6); border-radius: 32px;">
    <div style="text-align: center; margin-bottom: 3.5rem;">
      <h2 style="font-size: 2.25rem; font-weight: 900; color: #0f172a; margin: 0 0 0.75rem 0;">نظرات طراحان و مدیران محصول</h2>
      <p style="color: #64748b; font-size: 1.1rem;">تجربه واقعی کسانی که با المنتور کار کرده‌اند</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.75rem;">
      
      <!-- Testimonial 1 -->
      <div style="background: white; border: 1px solid #e2e8f0; border-radius: 20px; padding: 2rem; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
        <div style="display: flex; gap: 0.25rem; color: #f59e0b; margin-bottom: 1rem;">
          ★★★★★
        </div>
        <p style="color: #475569; font-size: 0.98rem; line-height: 1.75; margin: 0 0 1.5rem 0;">
          «فارسی‌سازی کامل و پشتیبانی بی‌نقص از راست‌چین باعث شد سرعت تحویل لندینگ‌های تبلیغاتی ما ۳ برابر شود. دیزاین پنل‌ها واقعاً مدرن و الهام‌بخش است.»
        </p>
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #4f46e5, #818cf8); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">س.م</div>
          <div>
            <div style="font-weight: 800; font-size: 0.95rem; color: #0f172a;">سینا محمدی</div>
            <div style="font-size: 0.8rem; color: #64748b;">مدیر ارشد محصول در دیجی‌مارکت</div>
          </div>
        </div>
      </div>

      <!-- Testimonial 2 -->
      <div style="background: white; border: 1px solid #e2e8f0; border-radius: 20px; padding: 2rem; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
        <div style="display: flex; gap: 0.25rem; color: #f59e0b; margin-bottom: 1rem;">
          ★★★★★
        </div>
        <p style="color: #475569; font-size: 0.98rem; line-height: 1.75; margin: 0 0 1.5rem 0;">
          «دیگر نیازی به کدنویسی جزئی برای استایل‌ها نداریم. بلاک‌های آماده و واکنش‌گرایی آنی به من این امکان را می‌دهد که مستقیماً در جلسه با کارفرما صفحه را چیده و تایید بگیرم.»
        </p>
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #ec4899, #f43f5e); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">م.ر</div>
          <div>
            <div style="font-weight: 800; font-size: 0.95rem; color: #0f172a;">مریم رضایی</div>
            <div style="font-size: 0.8rem; color: #64748b;">طراح ارشد UI/UX</div>
          </div>
        </div>
      </div>

      <!-- Testimonial 3 -->
      <div style="background: white; border: 1px solid #e2e8f0; border-radius: 20px; padding: 2rem; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
        <div style="display: flex; gap: 0.25rem; color: #f59e0b; margin-bottom: 1rem;">
          ★★★★★
        </div>
        <p style="color: #475569; font-size: 0.98rem; line-height: 1.75; margin: 0 0 1.5rem 0;">
          «خروجی کدها بسیار تمیز و سبک است. بر خلاف صفحه‌سازهای سنگین قدیمی، هیچ فایل زایدی به صفحه اضافه نمی‌شود و عملکرد سئو عالی باقی می‌ماند.»
        </p>
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #10b981, #059669); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">ع.ک</div>
          <div>
            <div style="font-weight: 800; font-size: 0.95rem; color: #0f172a;">علی کریمی</div>
            <div style="font-size: 0.8rem; color: #64748b;">معمار فرانت‌اند</div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Ant Design Contact Form Section -->
  <section id="contact-form-section" style="padding: 5rem 1.5rem; max-width: 820px; margin: 0 auto; direction: rtl;">
    <div class="ant-card">
      <div style="text-align: center; margin-bottom: 2.5rem;">
        <span style="display: inline-block; background: #e0e7ff; color: #4338ca; padding: 0.35rem 1rem; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.75rem;">
          فرم استاندارد Ant Design
        </span>
        <h2 style="font-size: 2.2rem; font-weight: 900; color: #0f172a; margin: 0 0 0.75rem 0;">ارتباط و مشاوره آنلاین</h2>
        <p style="color: #64748b; font-size: 1.05rem; margin: 0;">فرم زیر را تکمیل کنید تا کارشناسان ما سریعاً به درخواست شما پاسخ دهند.</p>
      </div>

      <form class="ant-form">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;">
          <div class="ant-form-item">
            <label class="ant-form-item-label ant-form-item-required">نام و نام خانوادگی</label>
            <input type="text" class="ant-input" placeholder="مثال: سارا رادمنش" required />
          </div>
          <div class="ant-form-item">
            <label class="ant-form-item-label ant-form-item-required">شماره تماس یا ایمیل</label>
            <input type="text" class="ant-input" placeholder="0912xxxxxxx یا ایمیل" required />
          </div>
        </div>

        <div class="ant-form-item">
          <label class="ant-form-item-label">موضوع درخواست یا همکاری</label>
          <select class="ant-input">
            <option value="landing">طراحی اختصاصی لندینگ پیج</option>
            <option value="enterprise">مشاوره پلن سازمانی</option>
            <option value="support">پشتیبانی فنی و توسعه</option>
          </select>
        </div>

        <div class="ant-form-item">
          <label class="ant-form-item-label ant-form-item-required">شرح درخواست شما</label>
          <textarea class="ant-input ant-input-textarea" rows="4" placeholder="توضیحات مربوط به پروژه یا پرسش خود را اینجا بنویسید..." required></textarea>
        </div>

        <div style="text-align: center; margin-top: 1.5rem;">
          <button type="submit" class="ant-btn-primary" style="width: 100%; height: 46px; font-size: 1.05rem;">
            ثبت و ارسال پیام به پشتیبانی
          </button>
        </div>
      </form>
    </div>
  </section>

  <!-- CTA Banner Section -->
  <section id="cta" style="padding: 5rem 1.5rem; max-width: 1140px; margin: 0 auto;">
    <div style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%); border-radius: 28px; padding: 4rem 2.5rem; text-align: center; color: white; box-shadow: 0 25px 50px -12px rgba(67, 56, 202, 0.45); position: relative; overflow: hidden;">
      
      <!-- Glow effect -->
      <div style="position: absolute; top: -50%; left: 50%; transform: translateX(-50%); width: 500px; height: 300px; background: radial-gradient(circle, rgba(129, 140, 248, 0.3) 0%, transparent 70%); pointer-events: none;"></div>

      <h2 style="font-size: 2.75rem; font-weight: 900; margin: 0 0 1.25rem 0; letter-spacing: -0.02em;">آماده‌اید وب‌سایت شگفت‌انگیز خود را بسازید؟</h2>
      <p style="color: #c7d2fe; font-size: 1.2rem; max-width: 680px; margin: 0 auto 2.5rem auto; line-height: 1.8;">
        همین حالا کار با المنتور را آغاز کنید، المان‌های صفحه را جا‌به‌جا نمایید و در کمترین زمان خروجی مورد نظرتان را دریافت کنید.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; align-items: center; flex-wrap: wrap;">
        <a href="#action" style="padding: 1rem 2.5rem; background: #ffffff; color: #312e81; text-decoration: none; border-radius: 14px; font-weight: 800; font-size: 1.05rem; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); transition: transform 0.2s ease;">همین الان شروع کنید</a>
      </div>
    </div>
  </section>

  <!-- Modern Footer -->
  <footer style="background: #0f172a; color: #94a3b8; padding: 4.5rem 1.5rem 2.5rem 1.5rem; border-top: 1px solid #1e293b;">
    <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr repeat(3, 1fr); gap: 3rem; margin-bottom: 3.5rem;">
      
      <!-- Brand column -->
      <div>
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
          <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #6366f1, #ec4899); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
            ★
          </div>
          <span style="font-size: 1.3rem; font-weight: 800; color: #f8fafc;">المنتور</span>
        </div>
        <p style="color: #64748b; font-size: 0.95rem; line-height: 1.8; max-width: 320px; margin: 0;">
          قدرتمندترین ویرایشگر دیداری وب‌سایت با معماری مدرن، پشتیبانی کامل از زبان فارسی و خروجی استاندارد وب.
        </p>
      </div>

      <!-- Links column 1 -->
      <div>
        <h4 style="color: #f1f5f9; font-size: 1rem; font-weight: 700; margin: 0 0 1.25rem 0;">محصول</h4>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
          <li><a href="#features" style="color: inherit; text-decoration: none;">ویژگی‌ها</a></li>
          <li><a href="#bento" style="color: inherit; text-decoration: none;">بلاک‌های هوشمند</a></li>
          <li><a href="#pricing" style="color: inherit; text-decoration: none;">تعرفه‌ها</a></li>
        </ul>
      </div>

      <!-- Links column 2 -->
      <div>
        <h4 style="color: #f1f5f9; font-size: 1rem; font-weight: 700; margin: 0 0 1.25rem 0;">منابع و آموزش</h4>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
          <li><a href="#docs" style="color: inherit; text-decoration: none;">راهنمای کاربری</a></li>
          <li><a href="#api" style="color: inherit; text-decoration: none;">مستندات SDK</a></li>
          <li><a href="#blog" style="color: inherit; text-decoration: none;">بلاگ طراحی</a></li>
        </ul>
      </div>

      <!-- Links column 3 -->
      <div>
        <h4 style="color: #f1f5f9; font-size: 1rem; font-weight: 700; margin: 0 0 1.25rem 0;">درباره و ارتباط</h4>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem;">
          <li><a href="#about" style="color: inherit; text-decoration: none;">درباره ما</a></li>
          <li><a href="#contact" style="color: inherit; text-decoration: none;">تماس با پشتیبانی</a></li>
          <li><a href="#privacy" style="color: inherit; text-decoration: none;">حریم خصوصی</a></li>
        </ul>
      </div>

    </div>

    <div style="max-width: 1200px; margin: 0 auto; border-top: 1px solid #1e293b; padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; color: #64748b;">
      <p style="margin: 0;">© ۱۴۰۵ تمامی حقوق برای المنتور محفوظ است. قدرت گرفته از Elementor.</p>
      <div style="direction: ltr; font-weight: 600;">Designed with Passion in Iran</div>
    </div>
  </footer>

</div>
`;

export default modernLandingHtml;
