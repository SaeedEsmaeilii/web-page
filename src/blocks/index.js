/**
 * بلاک‌های سفارشی و مدرن با آیکون‌های برداری SVG و فرم‌های استاندارد Ant Design
 */
export const customBlocks = [
  // ----------------------------------------------------
  // فرم‌های استاندارد Ant Design
  // ----------------------------------------------------
  {
    id: 'ant-contact-form-block',
    label: 'فرم تماس با ما (Ant Design)',
    category: 'فرم‌های Ant Design',
    media: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    `,
    content: `
      <section style="padding: 4rem 1.5rem; max-width: 720px; margin: 2rem auto; direction: rtl;">
        <div class="ant-card">
          <div style="text-align: center; margin-bottom: 2rem;">
            <span style="color: #6366f1; font-weight: 700; font-size: 0.9rem; text-transform: uppercase;">تماس با پشتیبانی</span>
            <h2 style="font-size: 1.85rem; font-weight: 800; color: #0f172a; margin: 0.5rem 0;">ارسال پیام به تیم ما</h2>
            <p style="color: #64748b; font-size: 0.95rem; margin: 0;">فرم زیر را تکمیل کنید تا کارشناسان ما در سریع‌ترین زمان با شما تماس بگیرند.</p>
          </div>
          
          <form class="ant-form">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="ant-form-item">
                <label class="ant-form-item-label ant-form-item-required">نام و نام خانوادگی</label>
                <input type="text" class="ant-input" placeholder="مثال: علی احمدی" required />
              </div>
              <div class="ant-form-item">
                <label class="ant-form-item-label ant-form-item-required">آدرس ایمیل</label>
                <input type="email" class="ant-input" placeholder="example@domain.com" required />
              </div>
            </div>

            <div class="ant-form-item">
              <label class="ant-form-item-label">موضوع درخواست</label>
              <select class="ant-input">
                <option value="support">پشتیبانی فنی و راهنمایی</option>
                <option value="sales">مشاوره خرید و سفارش پلن</option>
                <option value="cooperate">پیشنهاد همکاری</option>
                <option value="other">سایر موارد</option>
              </select>
            </div>

            <div class="ant-form-item">
              <label class="ant-form-item-label ant-form-item-required">متن پیام شما</label>
              <textarea class="ant-input ant-input-textarea" rows="4" placeholder="توضیحات درخواست خود را بنویسید..." required></textarea>
            </div>

            <div style="text-align: left; margin-top: 1rem;">
              <button type="submit" class="ant-btn-primary" style="width: 100%;">
                ارسال پیام
              </button>
            </div>
          </form>
        </div>
      </section>
    `,
  },
  {
    id: 'ant-newsletter-block',
    label: 'فرم عضویت خبرنامه (Ant Design)',
    category: 'فرم‌های Ant Design',
    media: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
      </svg>
    `,
    content: `
      <div style="background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%); border: 1px solid #312e81; border-radius: 20px; padding: 3rem 2rem; max-width: 800px; margin: 2rem auto; text-align: center; color: white; direction: rtl;">
        <h3 style="font-size: 1.6rem; font-weight: 800; margin: 0 0 0.5rem 0;">عضویت در خبرنامه تخصصی</h3>
        <p style="color: #cbd5e1; font-size: 0.95rem; margin: 0 0 1.75rem 0;">از جدیدترین قالب‌ها، ابزارهای طراحی وب و تخفیف‌های فصلی مطلع شوید.</p>
        
        <form class="ant-form" style="display: flex; gap: 0.75rem; justify-content: center; max-width: 520px; margin: 0 auto; flex-wrap: wrap;">
          <input type="email" class="ant-input" placeholder="ایمیل خود را وارد کنید..." style="flex: 1; min-width: 260px; height: 44px; border-radius: 10px;" required />
          <button type="submit" class="ant-btn-primary" style="height: 44px; padding: 0 28px; border-radius: 10px;">عضویت فوری</button>
        </form>
      </div>
    `,
  },
  {
    id: 'ant-login-card-block',
    label: 'کارت ورود به حساب (Ant Design)',
    category: 'فرم‌های Ant Design',
    media: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    `,
    content: `
      <div style="max-width: 400px; margin: 2rem auto; direction: rtl;">
        <div class="ant-card">
          <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 48px; height: 48px; background: #e0e7ff; color: #4f46e5; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1rem;">
              👤
            </div>
            <h3 style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 0.5rem 0;">ورود به حساب کاربری</h3>
            <p style="color: #64748b; font-size: 0.88rem; margin: 0;">اطلاعات حساب کاربری خود را وارد کنید</p>
          </div>

          <form class="ant-form">
            <div class="ant-form-item">
              <label class="ant-form-item-label ant-form-item-required">ایمیل یا شماره موبایل</label>
              <input type="text" class="ant-input" placeholder="user@example.com" required />
            </div>

            <div class="ant-form-item">
              <label class="ant-form-item-label ant-form-item-required">رمز عبور</label>
              <input type="password" class="ant-input" placeholder="••••••••" required />
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; font-size: 0.88rem;">
              <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; color: #475569;">
                <input type="checkbox" style="accent-color: #6366f1;" />
                <span>مرا به خاطر بسپار</span>
              </label>
              <a href="#" style="color: #6366f1; text-decoration: none; font-weight: 600;">فراموشی رمز؟</a>
            </div>

            <button type="submit" class="ant-btn-primary" style="width: 100%; height: 42px;">
              ورود به المنتور
            </button>
          </form>
        </div>
      </div>
    `,
  },

  // ----------------------------------------------------
  // بخش‌های مدرن و صفحات Bento
  // ----------------------------------------------------
  {
    id: 'hero-modern-block',
    label: 'بخش هیرو جذاب (Hero)',
    category: 'بخش‌های مدرن',
    media: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    `,
    content: `
      <section style="padding: 4.5rem 1.5rem; text-align: center; background: radial-gradient(circle at 50% 30%, #e0e7ff 0%, #f8fafc 80%); border-radius: 20px; margin: 1.5rem 0; border: 1px solid #e2e8f0; direction: rtl;">
        <div style="display: inline-block; background: #e0e7ff; color: #4338ca; padding: 0.35rem 1rem; border-radius: 9999px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1.25rem;">
          ✨ پیشنهاد استثنایی ماه
        </div>
        <h1 style="font-size: 2.75rem; font-weight: 900; color: #0f172a; margin: 0 0 1.25rem 0; line-height: 1.3;">
          عنوان اصلی و خیره‌کننده شما اینجاست
        </h1>
        <p style="font-size: 1.15rem; color: #64748b; max-width: 620px; margin: 0 auto 2.25rem auto; line-height: 1.8;">
          توضیحی گیرا و خلاقانه درباره ارزش‌ها و مزایای خدمات شما که مشتری را ترغیب به اقدام می‌کند.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; align-items: center;">
          <a href="#" class="ant-btn-primary" style="padding: 0 28px; text-decoration: none;">شروع همکاری</a>
          <a href="#" class="ant-btn-default" style="padding: 0 24px; text-decoration: none;">بیشتر بدانید</a>
        </div>
      </section>
    `,
  },
  {
    id: 'bento-features-block',
    label: 'شبکه ویژگی‌های بنتو (Bento)',
    category: 'بخش‌های مدرن',
    media: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="7" height="9" rx="1"></rect>
        <rect x="14" y="3" width="7" height="5" rx="1"></rect>
        <rect x="14" y="12" width="7" height="9" rx="1"></rect>
        <rect x="3" y="16" width="7" height="5" rx="1"></rect>
      </svg>
    `,
    content: `
      <section style="padding: 3rem 1.5rem; max-width: 1100px; margin: 0 auto; direction: rtl;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
          <div class="ant-card">
            <div style="width: 48px; height: 48px; background: #e0e7ff; color: #4338ca; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; margin-bottom: 1.25rem;">
              ⚡
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin: 0 0 0.75rem 0;">سرعت فوق‌العاده</h3>
            <p style="color: #64748b; font-size: 0.95rem; line-height: 1.7; margin: 0;">بارگذاری آنی صفحات با استانداردهای بهینه‌سازی پیشرفته و کدهای خالص.</p>
          </div>
          <div class="ant-card">
            <div style="width: 48px; height: 48px; background: #fdf2f8; color: #db2777; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; margin-bottom: 1.25rem;">
              🎨
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin: 0 0 0.75rem 0;">طراحی اختصاصی شیشه‌ای</h3>
            <p style="color: #64748b; font-size: 0.95rem; line-height: 1.7; margin: 0;">افکت‌های بلور مدرن و پالت‌های رنگی جذاب که برند شما را متمایز می‌کند.</p>
          </div>
          <div class="ant-card">
            <div style="width: 48px; height: 48px; background: #ecfdf5; color: #059669; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; margin-bottom: 1.25rem;">
              🔒
            </div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin: 0 0 0.75rem 0;">امنیت و پایداری</h3>
            <p style="color: #64748b; font-size: 0.95rem; line-height: 1.7; margin: 0;">پایداری بالا با ساختار ایزوله و بدون وابستگی‌های سنگین و مخرب.</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'pricing-card-block',
    label: 'کارت تعرفه ویژه (Pricing)',
    category: 'بخش‌های مدرن',
    media: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <line x1="2" y1="10" x2="22" y2="10"></line>
      </svg>
    `,
    content: `
      <div class="ant-card" style="border: 2px solid #6366f1; max-width: 350px; margin: 1.5rem auto; text-align: center; box-shadow: 0 14px 30px -5px rgba(99, 102, 241, 0.2); direction: rtl;">
        <span style="background: #e0e7ff; color: #4338ca; padding: 0.3rem 0.9rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 800;">پیشنهاد محبوب</span>
        <h3 style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 1rem 0 0.5rem 0;">اشتراک ویژه</h3>
        <div style="font-size: 2.25rem; font-weight: 900; color: #4f46e5; margin-bottom: 1.25rem;">
          ۳۸۰,۰۰۰ <span style="font-size: 0.9rem; font-weight: 500; color: #64748b;">تومان / ماهانه</span>
        </div>
        <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0; text-align: right; color: #475569; font-size: 0.95rem; line-height: 2.2;">
          <li>✓ دسترسی کامل به تمامی قالب‌ها</li>
          <li>✓ خروجی HTML/CSS نامحدود</li>
          <li>✓ پشتیبانی آنلاین ۲۴ ساعته</li>
          <li>✓ دامنه اختصاصی رایگان</li>
        </ul>
        <button type="button" class="ant-btn-primary" style="width: 100%;">انتخاب این پلن</button>
      </div>
    `,
  },
  {
    id: 'cta-banner-block',
    label: 'بنر اقدام فوری (CTA)',
    category: 'بخش‌های مدرن',
    media: `
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    `,
    content: `
      <div style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); border-radius: 20px; padding: 3.5rem 2rem; text-align: center; color: white; margin: 2rem 0; box-shadow: 0 16px 36px -8px rgba(49, 46, 129, 0.4); direction: rtl;">
        <h2 style="font-size: 2.2rem; font-weight: 800; margin: 0 0 1rem 0;">پروژه رویایی‌تان را همین امروز بسازید</h2>
        <p style="color: #c7d2fe; font-size: 1.1rem; max-width: 550px; margin: 0 auto 2rem auto;">بدون نیاز به نوشتن کد؛ وب‌سایت کاملاً بومی و واکنش‌گرا را منتشر کنید.</p>
        <button type="button" class="ant-btn-primary" style="background: white; color: #312e81 !important; border-color: white;">شروع طراحی فوری</button>
      </div>
    `,
  },
];

export default customBlocks;
