import './style.css';
import { initStudioEditor } from './config/editor.js';

/**
 * نقطه ورود اصلی برنامه (Main Entry Point)
 * کدهای یکپارچه و ماژولار استودیو طراحی صفحات وب
 */
initStudioEditor().catch((err) => {
  console.error('خطا در بارگذاری استودیو طراحی:', err);
  const loader = document.getElementById('loading-screen');
  if (loader) {
    loader.innerHTML = `
      <div class="loader-glow-box" style="border-color: rgba(239, 68, 68, 0.4); text-align: center; max-width: 480px;">
        <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(239, 68, 68, 0.15); color: #ef4444; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1rem;">
          ✕
        </div>
        <div style="color: #ef4444; font-size: 1.3rem; font-weight: 800; margin-bottom: 8px;">
          خطا در راه‌اندازی ویرایشگر
        </div>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.7; margin: 0 0 1.25rem 0;">
          ${err?.message || 'مشکلی در بارگذاری ماژول‌های استودیو رخ داده است.'}
        </p>
        <button onclick="window.location.reload()" style="padding: 0.65rem 1.6rem; background: #ef4444; color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; transition: background 0.2s ease;">
          تلاش مجدد
        </button>
      </div>
    `;
  }
});
