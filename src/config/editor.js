import createStudioEditor from '@grapesjs/studio-sdk';
import { faLocale } from './i18n.fa.js';
import { studioTheme } from './theme.js';
import { customBlocks } from '../blocks/index.js';
import { modernLandingHtml } from '../templates/landing-modern.js';

let activeStudio = null;
let activeGjsEditor = null;

// ذخیره‌سازی استایل‌ها و اسکریپت‌های درون‌ریزی‌شده برای تزریق دائمی به فریم‌ها
let importedAssets = {
  css: '',
  links: [],
  scripts: [],
};

/**
 * دریافت نمونه فعال ادیتور GrapesJS با پشتیبانی از چند منبع مطمئن
 */
export function getActiveEditor() {
  return activeGjsEditor || window.__gjss?.appEditorStore?.editor || null;
}

export function getActiveStudio() {
  return activeStudio;
}

/**
 * دریافت کلیه اسناد iframe مربوط به بوم طراحی (پشتیبانی کامل از فریم‌های متعدد و ساختار استودیو)
 */
export function getAllCanvasDocs(editor) {
  const docs = new Set();

  try {
    // ۱. سند بوم اصلی
    const mainDoc = editor?.Canvas?.getDocument?.();
    if (mainDoc) docs.add(mainDoc);

    // ۲. تمامی فریم‌های فعال در Canvas
    const frames = editor?.Canvas?.getFrames?.() || [];
    frames.forEach((f) => {
      const d = f?.view?.getDoc?.() || f?.view?.el?.contentDocument;
      if (d) docs.add(d);
    });

    // ۳. فریم‌های صفحه انتخاب‌شده در PageManager
    const page = editor?.Pages?.getSelected?.();
    const pageFrames = page?.getAllFrames?.() || [];
    pageFrames.forEach((f) => {
      const d = f?.view?.getDoc?.() || f?.view?.el?.contentDocument;
      if (d) docs.add(d);
    });

    // ۴. تمامی تگ‌های iframe موجود در سند والد (به عنوان لایه اطمینان نهایی)
    const iframes = document.querySelectorAll('iframe.gjs-frame, .gjs-frame iframe, iframe');
    iframes.forEach((ifr) => {
      try {
        const d = ifr.contentDocument || ifr.contentWindow?.document;
        if (d && (d.head || d.body)) docs.add(d);
      } catch (e) {
        // نادیده گرفتن خطای احتمالی cross-origin
      }
    });
  } catch (err) {
    console.warn('Canvas docs discovery notice:', err);
  }

  return Array.from(docs);
}

/**
 * تزریق مستقیم و ضدگلوله استایل‌ها، Tailwind CDN، فونت‌ها و فایل‌های CSS به تمام اسناد بوم
 */
export function injectStylesToCanvas(editor, css = '', links = [], scripts = []) {
  try {
    const docs = getAllCanvasDocs(editor);
    if (!docs.length) return;

    docs.forEach((doc) => {
      if (!doc) return;

      // اطمینان از جهت راست‌به‌چپ در سند بوم
      try {
        if (doc.documentElement) {
          doc.documentElement.setAttribute('dir', 'rtl');
          doc.documentElement.setAttribute('lang', 'fa');
        }
      } catch (e) {}

      // ۱. تزریق فایل‌های استایل خارجی <link rel="stylesheet">
      links.forEach((href) => {
        if (href && doc.head && !doc.querySelector(`link[href="${href}"]`)) {
          const linkEl = doc.createElement('link');
          linkEl.rel = 'stylesheet';
          linkEl.href = href;
          doc.head.appendChild(linkEl);
        }
      });

      // ۲. تزریق اسکریپت‌های موردنیاز (مانند Tailwind CDN)
      scripts.forEach((src) => {
        if (src && doc.head && !doc.querySelector(`script[src="${src}"]`)) {
          const scriptEl = doc.createElement('script');
          scriptEl.src = src;
          doc.head.appendChild(scriptEl);
        }
      });

      // ۳. تزریق استایل‌های سفارشی به <head> و تکرار در <body> جهت مصونیت در برابر بازسازی‌های فریم
      if (css && css.trim()) {
        const cleanCss = css.trim();

        // تزریق در <head>
        if (doc.head) {
          let styleHead = doc.getElementById('imported-user-styles');
          if (!styleHead) {
            styleHead = doc.createElement('style');
            styleHead.id = 'imported-user-styles';
            doc.head.appendChild(styleHead);
          }
          styleHead.textContent = cleanCss;
        }

        // تزریق نسخه پشتیبان در <body> برای اطمینان ۱۰۰٪ حتی اگر GrapesJS هد را بازنشانی کند
        if (doc.body) {
          let styleBody = doc.getElementById('imported-user-styles-body');
          if (!styleBody) {
            styleBody = doc.createElement('style');
            styleBody.id = 'imported-user-styles-body';
            doc.body.appendChild(styleBody);
          }
          styleBody.textContent = cleanCss;
        }
      }
    });
  } catch (err) {
    console.warn('تزریق استایل به بوم با هشدار مواجه شد:', err);
  }
}

/**
 * راه‌اندازی و پیکربندی مرکزی ویرایشگر GrapesJS Studio با زبان فارسی، Ant Design و تم مدرن
 */
export async function initStudioEditor(root = '#studio', onReady) {
  if (activeStudio) {
    try {
      activeStudio.destroy?.();
    } catch {
      // ignore
    }
  }

  const studio = await createStudioEditor({
    root,
    licenseKey: 'DEV_LICENSE_KEY',
    theme: 'dark',
    customTheme: {
      default: studioTheme,
    },
    storage: {
      type: 'browser',
      autosaveChanges: 1,
    },
    // بومی‌سازی رابط کاربری استودیو
    i18n: {
      locales: {
        fa: faLocale,
        en: faLocale,
      },
    },
    // تنظیمات مستقیم هسته GrapesJS برای بوم طراحی و فرم‌های Ant Design
    gjsOptions: {
      i18n: {
        locale: 'fa',
        detectLocale: false,
      },
      canvas: {
        styles: [
          'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap',
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        ],
        scripts: [
          'https://cdn.tailwindcss.com',
        ],
      },
      canvasCss: `
        [contenteditable] { outline: 0px solid transparent; }
        
        html, body {
          direction: rtl !important;
          font-family: 'Vazirmatn', system-ui, -apple-system, sans-serif !important;
          box-sizing: border-box;
        }

        *, *:before, *:after {
          box-sizing: border-box;
        }

        /* ---------------------------------------------------- */
        /* استایل‌های رسمی Ant Design برای فرم‌ها و ورودی‌ها در بوم */
        /* ---------------------------------------------------- */

        .ant-form, form {
          direction: rtl;
          font-family: 'Vazirmatn', system-ui, sans-serif;
          text-align: right;
        }

        .ant-form-item {
          margin-bottom: 22px;
          display: flex;
          flex-direction: column;
          text-align: right;
        }

        .ant-form-item-label, label {
          display: block;
          font-weight: 600;
          font-size: 14px;
          color: #334155;
          margin-bottom: 8px;
          text-align: right;
        }

        .ant-form-item-required::before {
          content: '* ';
          color: #ff4d4f;
          font-size: 14px;
          line-height: 1;
        }

        /* استایل ورودی‌های Ant Design */
        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="tel"],
        input[type="number"],
        input[type="search"],
        input[type="url"],
        textarea,
        select,
        .ant-input {
          width: 100%;
          min-height: 40px;
          padding: 8px 14px;
          font-size: 14px;
          line-height: 1.5;
          color: #0f172a;
          background-color: #ffffff;
          border: 1px solid #d9d9d9;
          border-radius: 8px;
          font-family: 'Vazirmatn', system-ui, sans-serif;
          transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
          outline: none;
          direction: rtl;
        }

        input:hover,
        textarea:hover,
        select:hover,
        .ant-input:hover {
          border-color: #6366f1;
        }

        input:focus,
        textarea:focus,
        select:focus,
        .ant-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
          outline: none;
        }

        input::placeholder,
        textarea::placeholder {
          color: #94a3b8;
          font-size: 13.5px;
        }

        textarea, .ant-input-textarea {
          min-height: 100px;
          padding: 10px 14px;
          resize: vertical;
        }

        /* دکمه‌های فرم با دیزاین سیستم Ant */
        button[type="submit"],
        .ant-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 42px;
          padding: 8px 24px;
          font-size: 14px;
          font-weight: 700;
          border-radius: 8px;
          color: #ffffff !important;
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
          border: 1px solid #4f46e5;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);
          transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
          font-family: 'Vazirmatn', system-ui, sans-serif;
          text-decoration: none;
        }

        button[type="submit"]:hover,
        .ant-btn-primary:hover {
          background: linear-gradient(135deg, #4338ca 0%, #4f46e5 100%);
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.45);
          transform: translateY(-1px);
        }

        .ant-btn-default {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px;
          color: #334155;
          background: #ffffff;
          border: 1px solid #d9d9d9;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Vazirmatn', system-ui, sans-serif;
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
        }

        .ant-btn-default:hover {
          color: #6366f1;
          border-color: #6366f1;
        }

        /* کارت‌های فرم Ant Design */
        .ant-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          padding: 28px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        }
      `,
    },
    project: {
      type: 'web',
      default: {
        pages: [
          {
            name: 'صفحه اصلی',
            component: modernLandingHtml,
          },
        ],
      },
    },
    blocks: {
      default: customBlocks,
    },
    onEditor: (ed) => {
      activeGjsEditor = ed?.editor || ed;
    },
    onReady: (ed) => {
      activeGjsEditor = ed?.editor || ed || activeGjsEditor || window.__gjss?.appEditorStore?.editor;

      const reapplyAllStyles = () => {
        injectStylesToCanvas(activeGjsEditor, importedAssets.css, importedAssets.links, importedAssets.scripts);
      };

      // اعمال اولیه استایل‌ها و ویژگی‌های RTL به اسناد بوم
      reapplyAllStyles();

      // گوش دادن به کلیه رویدادهای بازنشانی فریم و جابجایی دستگاه جهت حفظ دائمی استایل‌ها
      try {
        activeGjsEditor?.on('canvas:frame:load', reapplyAllStyles);
        activeGjsEditor?.on('canvas:frame:load:head', reapplyAllStyles);
        activeGjsEditor?.on('canvas:frame:load:body', reapplyAllStyles);
        activeGjsEditor?.on('page:select', reapplyAllStyles);
        activeGjsEditor?.on('device:select', reapplyAllStyles);
      } catch (e) {
        // ignore
      }

      // ناظر تغییرات DOM در کانتینر استودیو برای بازیابی خودکار استایل‌ها در صورت ساخت مجدد iframe
      try {
        const rootEl = typeof root === 'string' ? document.querySelector(root) : root;
        if (rootEl) {
          const observer = new MutationObserver(() => {
            if (importedAssets.css || importedAssets.links.length || importedAssets.scripts.length) {
              reapplyAllStyles();
            }
          });
          observer.observe(rootEl, { childList: true, subtree: true });
        }
      } catch (e) {
        // ignore
      }

      // اتصال دستور درون‌ریزی ادیتور به مودال Ant Design
      try {
        activeGjsEditor?.Commands?.add('studio:dialogImportCode', {
          run: () => {
            window.__openImportModal?.();
          },
        });
      } catch (e) {
        console.warn('Command registration notice:', e);
      }

      if (onReady) {
        onReady({ studio, editor: activeGjsEditor });
      }

      console.log('✨ استودیو طراحی وب‌سایت آرتا با موفقیت و به زبان فارسی آماده به کار است!');
    },
  });

  activeStudio = studio;
  return studio;
}

export function getEditorCode() {
  const editor = getActiveEditor();
  if (!editor) return { html: '', css: '' };

  let html = editor.getHtml() || '';
  let css = editor.getCss() || '';

  // الحاق استایل‌های درون‌ریزی‌شده به خروجی نهایی
  if (importedAssets.css && importedAssets.css.trim()) {
    css = `/* کدهای استایل درون‌ریزی شده */\n${importedAssets.css.trim()}\n\n${css}`;
  }

  return { html, css };
}

export function setDevice(deviceId) {
  const editor = getActiveEditor();
  if (!editor || !editor.DeviceManager) return;
  const idMap = {
    desktop: 'desktop',
    tablet: 'tablet',
    mobile: 'mobilePortrait',
  };
  const targetId = idMap[deviceId] || deviceId;
  const devices = editor.DeviceManager.getAll();
  const found = devices.find((d) => d.id === targetId || d.id === deviceId);
  if (found) {
    editor.DeviceManager.select(found);
  }
}

export function togglePreview() {
  const editor = getActiveEditor();
  if (!editor) return false;
  const isPreview = editor.Commands.isActive('core:preview');
  if (isPreview) {
    editor.Commands.stop('core:preview');
    return false;
  } else {
    editor.Commands.run('core:preview');
    return true;
  }
}

export function undo() {
  const editor = getActiveEditor();
  editor?.UndoManager?.undo();
}

export function redo() {
  const editor = getActiveEditor();
  editor?.UndoManager?.redo();
}

/**
 * تابع درون‌ریزی هوشمند کدها با تضمین ۱۰۰٪ اجرای تمام استایل‌های CSS، Tailwind، فونت‌ها و لینک‌های خارجی
 */
export function importCode(codeString, mode = 'replace') {
  const editor = getActiveEditor();
  if (!editor) {
    console.error('موتور ادیتور فعال یافت نشد!');
    return false;
  }

  const raw = (codeString || '').trim();
  if (!raw) return false;

  try {
    let extractedCss = '';
    const links = [];
    const scripts = [];

    // ۱. استخراج مستقیم CSS از تمامی تگ‌های <style> با Regex (قبل از پارس یا تغییر شکل توسط مرورگر)
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    let match;
    while ((match = styleRegex.exec(raw)) !== null) {
      if (match[1]) {
        extractedCss += '\n' + match[1].trim();
      }
    }

    // ۲. استخراج لینک‌های استایل خارجی <link rel="stylesheet">
    const linkRegex = /<link[^>]+rel=["']stylesheet["'][^>]*>/gi;
    let linkMatch;
    while ((linkMatch = linkRegex.exec(raw)) !== null) {
      const hrefMatch = linkMatch[0].match(/href=["']([^"']+)["']/i);
      if (hrefMatch && hrefMatch[1] && !links.includes(hrefMatch[1])) {
        links.push(hrefMatch[1]);
      }
    }

    // ۳. استخراج اسکریپت‌های مرتبط <script src="...">
    const scriptRegex = /<script[^>]+src=["']([^"']+)["'][^>]*>/gi;
    let scriptMatch;
    while ((scriptMatch = scriptRegex.exec(raw)) !== null) {
      if (scriptMatch[1] && !scripts.includes(scriptMatch[1])) {
        scripts.push(scriptMatch[1]);
      }
    }

    // ۴. بررسی مکمل توسط DOMParser برای استخراج ساختار و تگ‌های جاافتاده
    const parser = new DOMParser();
    const doc = parser.parseFromString(raw, 'text/html');

    doc.querySelectorAll('style').forEach((st) => {
      const content = (st.innerHTML || '').trim();
      if (content && !extractedCss.includes(content)) {
        extractedCss += '\n' + content;
      }
    });

    doc.querySelectorAll('link[rel="stylesheet"]').forEach((lt) => {
      const href = lt.getAttribute('href');
      if (href && !links.includes(href)) {
        links.push(href);
      }
    });

    doc.querySelectorAll('script[src]').forEach((s) => {
      const src = s.getAttribute('src');
      if (src && !scripts.includes(src)) {
        scripts.push(src);
      }
    });

    // ۵. تشخیص خودکار کلاس‌های تیلویند: در صورت وجود، تزریق فوری اسکریپت Tailwind CDN
    const hasTailwindClasses = /(bg-|text-|flex|grid|rounded-|shadow-|items-|justify-|p-|px-|py-|m-|mx-|my-|w-|h-|border-|gap-)/i.test(raw);
    if (hasTailwindClasses && !scripts.some((s) => s.includes('tailwindcss'))) {
      scripts.push('https://cdn.tailwindcss.com');
    }

    // ۶. به‌روزرسانی دارایی‌های دائمی
    if (mode === 'replace') {
      importedAssets.css = extractedCss.trim();
      importedAssets.links = Array.from(new Set(links));
      importedAssets.scripts = Array.from(new Set(scripts));
    } else {
      importedAssets.css = (importedAssets.css + '\n' + extractedCss).trim();
      importedAssets.links = Array.from(new Set([...importedAssets.links, ...links]));
      importedAssets.scripts = Array.from(new Set([...importedAssets.scripts, ...scripts]));
    }

    // ۷. ثبت پیوندها و اسکریپت‌ها در مدل فریم صفحه انتخابی GrapesJS
    const page = editor.Pages?.getSelected?.();
    const frame = page?.getMainFrame?.();
    if (frame) {
      importedAssets.links.forEach((href) => frame.addLink?.(href));
      importedAssets.scripts.forEach((src) => frame.addScript?.(src));
      if (extractedCss.trim()) {
        try {
          frame.addHeadItem?.({
            tag: 'style',
            attributes: { id: 'frame-imported-styles' },
            content: extractedCss.trim(),
          });
        } catch (e) {}
      }
    }

    // ۸. آماده‌سازی محتوای HTML تمیز جهت درج در بوم (حذف تگ‌های اسکریپت و لینک از بدنه)
    doc.querySelectorAll('script, link[rel="stylesheet"]').forEach((el) => el.remove());
    
    let htmlContent = '';
    if (doc.body && doc.body.innerHTML && doc.body.innerHTML.trim()) {
      htmlContent = doc.body.innerHTML;
    } else {
      htmlContent = raw
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi, '')
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .trim();
    }

    // ۹. اعمال ساختار به کامپوننت‌های صفحه فعال
    if (mode === 'replace') {
      if (page) {
        page.getMainComponent()?.components(htmlContent);
      } else {
        editor.setComponents(htmlContent);
      }
    } else {
      // حالت الحاق
      editor.addComponents(htmlContent);
    }

    // ۱۰. افزودن استایل‌ها به سیستم قوانین CSS ادیتور
    if (extractedCss.trim()) {
      try {
        editor.addStyle?.(extractedCss);
      } catch (e) {
        try {
          editor.setStyle?.(extractedCss);
        } catch (e2) {}
      }
    }

    // ۱۱. تزریق مستقیم به کلیه اسناد iframe بوم در مراحل چندگانه (بدون ریفرش مخرب)
    injectStylesToCanvas(editor, importedAssets.css, importedAssets.links, importedAssets.scripts);

    requestAnimationFrame(() => {
      injectStylesToCanvas(editor, importedAssets.css, importedAssets.links, importedAssets.scripts);
    });

    setTimeout(() => {
      injectStylesToCanvas(editor, importedAssets.css, importedAssets.links, importedAssets.scripts);
    }, 100);

    setTimeout(() => {
      injectStylesToCanvas(editor, importedAssets.css, importedAssets.links, importedAssets.scripts);
    }, 400);

    return true;
  } catch (err) {
    console.error('خطا در درون‌ریزی کد به ادیتور:', err);
    throw err;
  }
}

export function clearCanvas() {
  const editor = getActiveEditor();
  if (!editor) return;
  importedAssets = { css: '', links: [], scripts: [] };

  const docs = getAllCanvasDocs(editor);
  docs.forEach((d) => {
    try {
      d.getElementById('imported-user-styles')?.remove();
      d.getElementById('imported-user-styles-body')?.remove();
    } catch (e) {}
  });

  const selectedPage = editor.Pages?.getSelected();
  if (selectedPage) {
    selectedPage.getMainComponent()?.components('');
  } else {
    editor.setComponents('');
  }
}

export default initStudioEditor;
