/**
 * ترجمه کامل فارسی برای رابط کاربری GrapesJS Studio SDK
 */
export const faLocale = {
  add: 'افزودن',
  delete: 'حذف',
  duplicate: 'تکثیر',
  rename: 'تغییر نام',
  remove: 'حذف',
  clear: 'پاک‌سازی',
  select: 'انتخاب',
  selectList: 'انتخاب از لیست',
  search: 'جستجو...',
  update: 'به‌روزرسانی',
  updated: 'به‌روز شد',
  confirm: 'تایید',
  cancel: 'انصراف',
  enable: 'فعال‌سازی',
  disable: 'غیرفعال‌سازی',
  upload: 'بارگذاری',
  close: 'بستن',
  load: 'بارگذاری',
  copy: 'کپی',
  save: 'ذخیره',
  error: 'خطا',
  current: 'فعلی',
  toggleCss: 'تغییر وضعیت CSS',
  selectTarget: 'انتخاب هدف',
  noCode: 'کدی وجود ندارد',
  noItems: 'موردی یافت نشد',
  confirmAction: 'آیا از انجام این عملیات اطمینان دارید؟',
  eyeDropper: 'قطره‌چکان رنگ',
  noEyeDropper: 'قطره‌چکان در این مرورگر پشتیبانی نمی‌شود',
  unauthorized: 'عدم دسترسی مجاز',
  notItemsFound: 'هیچ موردی یافت نشد',

  actions: {
    componentOutline: {
      title: 'نمایش کادر المان‌ها'
    },
    preview: {
      title: 'پیش‌نمایش زنده'
    },
    fullscreen: {
      title: 'تمام صفحه'
    },
    showCode: {
      title: 'مشاهده کد',
      exportButton: 'خروجی کد'
    },
    undo: {
      title: 'بازگردانی (Undo)'
    },
    redo: {
      title: 'انجام مجدد (Redo)'
    },
    save: {
      title: 'ذخیره پروژه'
    },
    store: {
      title: 'ذخیره‌سازی'
    },
    open: {
      title: 'باز کردن پروژه'
    },
    editCode: {
      title: 'ویرایش کد',
      noChanges: 'تغییری اعمال نشده است',
      button: 'اعمال تغییرات'
    },
    importCode: {
      title: 'درون‌ریزی کد',
      parseError: 'خطا در تجزیه کد وارد شده',
      content: 'کد HTML/CSS خود را اینجا قرار دهید...',
      button: 'درون‌ریزی'
    },
    clearCanvas: {
      title: 'پاک‌سازی صفحه',
      content: 'آیا مطمئنید می‌خواهید تمام محتوای صفحه را پاک کنید؟ این عمل غیرقابل بازگشت است.'
    },
    about: {
      title: 'درباره سازنده'
    },
    embed: {
      title: 'درج کد سفارشی'
    },
    newProject: {
      title: 'پروژه جدید'
    },
    installApp: {
      title: 'نصب برنامه',
      installed: 'برنامه نصب شد'
    }
  },

  modals: {
    styleCatalog: {
      title: 'کاتالوگ استایل‌ها',
      noStyles: 'استایلی موجود نیست'
    },
    openProject: {
      title: 'باز کردن پروژه'
    }
  },

  pluginManager: {
    plugins: 'پلاگین‌ها',
    all: 'همه',
    installed: 'نصب شده',
    install: 'نصب',
    uninstall: 'حذف نصب',
    allPlugins: 'تمامی پلاگین‌ها',
    updateStudio: 'به‌روزرسانی استودیو'
  },

  globalStyleManager: {
    notFound: 'استایل سراسری یافت نشد',
    globalStyles: 'استایل‌های سراسری'
  },

  pageManager: {
    pages: 'صفحات',
    page: 'صفحه',
    newPage: 'صفحه جدید',
    add: 'افزودن صفحه',
    rename: 'تغییر نام صفحه',
    duplicate: 'تکثیر صفحه',
    copy: 'کپی صفحه',
    delete: 'حذف صفحه',
    deletePage: 'حذف این صفحه',
    confirmDelete: 'آیا از حذف این صفحه مطمئن هستید؟',
    homePage: 'صفحه اصلی',
    settings: {
      label: 'تنظیمات صفحه',
      title: 'تنظیمات سئو و متادیتا',
      global: 'تنظیمات سراسری',
      fields: {
        name: { label: 'نام صفحه' },
        slug: { label: 'آدرس (Slug)', description: 'مسیر URL اختصاصی صفحه' },
        favicon: { label: 'فاوآیکون', description: 'آیکون برگه مرورگر' },
        title: { label: 'عنوان صفحه (SEO Title)', description: 'عنوانی که در نتایج گوگل و تب مرورگر نشان داده می‌شود' },
        description: { label: 'توضیحات متای سئو', description: 'خلاصه محتوای صفحه برای موتورهای جستجو' },
        keywords: { label: 'کلمات کلیدی', description: 'کلمات کلیدی مرتبط با صفحه' },
        socialTitle: { label: 'عنوان در شبکه‌های اجتماعی', description: 'عنوان اشتراک‌گذاری در OpenGraph' },
        socialImage: { label: 'تصویر شاخص شبکه‌های اجتماعی', description: 'آدرس تصویر کاور اشتراک‌گذاری' },
        socialDescription: { label: 'توضیحات در شبکه‌های اجتماعی', description: 'توضیح کوتاه هنگام اشتراک‌گذاری' },
        customCodeHead: { label: 'کد سفارشی Head', description: 'اسکریپت‌ها و استایل‌های داخل تگ <head>' },
        customCodeBody: { label: 'کد سفارشی Body', description: 'اسکریپت‌های انتهای تگ <body>' }
      }
    }
  },

  projectManager: {
    existentProjects: 'پروژه‌های موجود',
    templates: 'قالب‌های آماده',
    notAvailable: 'در دسترس نیست',
    projectType: 'نوع پروژه',
    projectName: 'نام پروژه',
    pages: 'صفحات'
  },

  templates: {
    notFound: 'قالبی یافت نشد'
  },

  storageManager: {
    errorLoad: 'خطا در بارگذاری پروژه از حافظه',
    errorStore: 'خطا در ذخیره‌سازی پروژه'
  },

  assetManager: {
    addUrl: 'افزودن از طریق لینک',
    projectAssets: 'تصاویر پروژه',
    userAssets: 'فایل‌های من',
    errorLoad: 'خطا در بارگذاری تصویر',
    errorUpload: 'خطا در آپلود فایل',
    errorDelete: 'خطا در حذف فایل',
    deleteConfirmQuestion: 'آیا از حذف این فایل مطمئنید؟',
    deleteConfirmExplanation: 'این فایل از کتابخانه رسانه‌ها حذف خواهد شد.',
    assetTypes: {
      all: 'همه فایل‌ها',
      image: 'تصاویر'
    },
    noProvider: 'منبع رسانه‌ای موجود نیست'
  },

  fontManager: {
    addFontToProject: 'افزودن فونت به پروژه',
    projectFonts: 'فونت‌های پروژه',
    emptyProjectFonts: 'هنوز فونت سفارشی اضافه نشده است',
    selectFont: 'انتخاب فونت'
  },

  blockManager: {
    notFound: 'هیچ بلاکی با این مشخصات یافت نشد',
    blocks: 'بلاک‌ها و المان‌ها',
    add: 'افزودن بلاک جدید',
    search: 'جستجوی بلاک‌ها...',
    labels: {
      section: 'بخش (Section)',
      column1: 'یک ستون',
      column2: 'دو ستون',
      column3: 'سه ستون',
      'column3-7': 'ستون نامتقارن ۳/۷',
      gridRow: 'سطر گرید',
      heading: 'عنوان (Heading)',
      divider: 'خط جداکننده',
      imageBox: 'باکس تصویر',
      linkBox: 'باکس پیوند'
    },
    categories: {
      Basic: 'پایه‌ای و چیدمان',
      Typography: 'متن و عنوان',
      Media: 'رسانه و تصویر',
      Forms: 'فرم و ورودی‌ها',
      Sections: 'بخش‌های آماده مدرن',
      Extra: 'المان‌های پیشرفته'
    },
    types: {
      regular: 'عادی',
      symbols: 'سمبل‌ها'
    },
    symbols: {
      notFound: 'سمبلی یافت نشد',
      instancesProject: 'نمونه‌های موجود در پروژه',
      delete: 'حذف سمبل',
      deleteConfirm: 'آیا از حذف این سمبل اطمینان دارید؟'
    }
  },

  domComponents: {
    names: {
      section: 'بخش (Section)',
      gridRow: 'سطر گرید',
      gridColumn: 'ستون گرید',
      heading: 'عنوان',
      divider: 'خط جداکننده',
      imageBox: 'باکس تصویر',
      linkBox: 'باکس لینک',
      text: 'متن',
      image: 'تصویر',
      video: 'ویدیو',
      map: 'نقشه',
      link: 'پیوند',
      svg: 'آیکون SVG',
      button: 'دکمه'
    }
  },

  traitManager: {
    empty: 'هیچ ویژگی یا تنظیمی برای المان انتخاب شده وجود ندارد',
    notFound: 'تنظیماتی یافت نشد',
    panelLabel: 'ویژگی‌های المان (Traits)',
    traits: {
      labels: {
        loading: 'در حال بارگذاری تنظیمات...',
        target: 'مقصد پیوند',
        showList: 'نمایش لیست',
        customAttributes: 'ویژگی‌های سفارشی (Attributes)'
      },
      attributes: {}
    }
  },

  deviceManager: {
    allDevices: 'همه دستگاه‌ها',
    desktop: 'رایانه دسکتاپ',
    tablet: 'تبلت',
    mobile: 'گوشی موبایل'
  },

  selectorManager: {
    noSelecton: 'هیچ المانی انتخاب نشده است',
    selectFromCanvas: 'یک المان را از روی صفحه انتخاب کنید',
    selectFromList: 'انتخاب از فهرست کلاس‌ها',
    selectCustom: 'افزودن کلاس سفارشی',
    selection: 'کلاس‌های انتخابی',
    selector: 'سلکتور / کلاس',
    addNewSelector: 'افزودن کلاس جدید...',
    removeSelector: 'حذف کلاس',
    target: 'هدف',
    device: 'دستگاه',
    state: 'حالت (Hover, Active...)',
    deleteStyle: 'حذف استایل',
    showCSS: 'مشاهده CSS',
    searchStyle: 'جستجوی استایل...',
    applyOnSelector: 'اعمال بر روی کلاس',
    noSelectors: 'کلاسی وجود ندارد',
    applyOnComponents: 'اعمال روی کامپوننت',
    noComponents: 'کامپوننتی نیست',
    currentSelection: 'انتخاب جاری'
  },

  layerManager: {
    layers: 'ساختار لایه‌ها (DOM Tree)'
  },

  styleManager: {
    empty: 'برای مشاهده و ویرایش استایل، ابتدا المانی را از روی صفحه انتخاب کنید',
    notFound: 'استایلی پیدا نشد',
    panelLabel: 'طراحی و استایل (Styles)',
    layout: {
      flexChild: 'تنظیمات فرزند فلکس',
      display: {
        tips: {
          block: 'بلاک (تمام عرض)',
          inline: 'درون‌خطی (Inline)',
          'inline-block': 'درون‌خطی بلوکی',
          flex: 'چیدمان انعطاف‌پذیر (Flex)',
          none: 'مخفی (None)'
        }
      }
    },
    effects: {
      boxShadow: {
        xOffset: 'انحراف افقی',
        yOffset: 'انحراف عمودی',
        blur: 'میزان تاری (Blur)',
        spread: 'گستردگی (Spread)',
        color: 'رنگ سایه'
      },
      textShadow: {
        xOffset: 'انحراف افقی متن',
        yOffset: 'انحراف عمودی متن',
        blur: 'تاری سایه متن',
        color: 'رنگ سایه متن'
      },
      filter: {
        type: 'نوع فیلتر',
        value: 'مقدار فیلتر'
      },
      backdropFilter: {
        type: 'فیلتر شیشه‌ای (Backdrop)',
        value: 'میزان افکت شیشه‌ای'
      },
      transition: {
        type: 'ویژگی متحرک',
        easing: 'نحوه حرکت (Easing)',
        duration: 'مدت زمان',
        delay: 'تاخیر زمانی'
      },
      transform: {
        type: 'تغییر شکل (Transform)',
        value: 'مقدار'
      },
      childrenTransform: 'تغییر شکل فرزندان'
    },
    background: {
      sizeMode: {
        custom: 'سفارشی',
        preset: 'پیش‌فرض'
      }
    },
    position: {
      tips: {
        static: 'ایستا (Static)',
        relative: 'نسبی (Relative)',
        absolute: 'مطلق (Absolute)',
        fixed: 'ثابت در صفحه (Fixed)',
        sticky: 'چسبنده (Sticky)'
      },
      presets: {
        title: 'موقعیت‌های آماده',
        options: {
          topLeft: 'بالا چپ',
          topRight: 'بالا راست',
          bottomLeft: 'پایین چپ',
          bottomRight: 'پایین راست',
          left: 'چپ',
          right: 'راست',
          bottom: 'پایین',
          top: 'بالا',
          full: 'تمام صفحه'
        }
      }
    },
    properties: {
      'margin-top': 'فاصله از بالا (Margin)',
      'margin-right': 'فاصله از راست',
      'margin-bottom': 'فاصله از پایین',
      'margin-left': 'فاصله از چپ',
      'padding-top': 'فاصله درونی از بالا (Padding)',
      'padding-right': 'فاصله درونی از راست',
      'padding-bottom': 'فاصله درونی از پایین',
      'padding-left': 'فاصله درونی از چپ',
      'border-top-left-radius': 'گردی گوشه بالا-چپ',
      'border-top-right-radius': 'گردی گوشه بالا-راست',
      'border-bottom-right-radius': 'گردی گوشه پایین-راست',
      'border-bottom-left-radius': 'گردی گوشه پایین-چپ',
      'mix-blend-mode': 'حالت ترکیب رنگ',
      'transform-style': 'استایل سه‌بعدی',
      'backface-visibility': 'دید پشت عنصر',
      'perspective-origin': 'مبدا پرسپکتیو',
      'perspective-origin-x': 'مبدا پرسپکتیو افقی',
      'perspective-origin-y': 'مبدا پرسپکتیو عمودی',
      'transform-origin-x': 'مرکز چرخش افقی',
      'transform-origin-y': 'مرکز چرخش عمودی',
      'align-items': 'تراز عمودی عناصر (Align Items)',
      'align-self': 'تراز خود عنصر',
      'justify-content': 'توزیع افقی محتوا (Justify Content)',
      'row-gap': 'فاصله بین سطرها',
      'column-gap': 'فاصله بین ستون‌ها',
      'font-family': 'نوع قلم (Font Family)',
      'font-size': 'اندازه متن (Font Size)',
      'font-weight': 'ضخامت متن (Font Weight)',
      'letter-spacing': 'فاصله بین حروف',
      'text-align': 'تراز متن (راست/وسط/چپ)',
      'text-decoration': 'تزیین متن (زیرخط و...)',
      'text-transform': 'تبدیل حروف',
      'white-space': 'شکست خطوط متن',
      'border-top-width': 'ضخامت کادر بالا',
      'border-right-width': 'ضخامت کادر راست',
      'border-bottom-width': 'ضخامت کادر پایین',
      'border-left-width': 'ضخامت کادر چپ',
      'border-top-style': 'نوع خط کادر بالا',
      'border-right-style': 'نوع خط کادر راست',
      'border-bottom-style': 'نوع خط کادر پایین',
      'border-left-style': 'نوع خط کادر چپ',
      'border-top-color': 'رنگ کادر بالا',
      'border-right-color': 'رنگ کادر راست',
      'border-bottom-color': 'رنگ کادر پایین',
      'border-left-color': 'رنگ کادر چپ',
      'background-position': 'موقعیت تصویر پس‌زمینه',
      'background-position-x': 'موقعیت افقی پس‌زمینه',
      'background-position-y': 'موقعیت عمودی پس‌زمینه',
      'background-size': 'اندازه پس‌زمینه',
      'background-size-options': 'تنظیمات اندازه پس‌زمینه',
      'background-size-x': 'عرض پس‌زمینه',
      'background-size-y': 'ارتفاع پس‌زمینه',
      'background-repeat': 'تکرار تصویر پس‌زمینه',
      'background-attachment': 'نحوه اسکرول پس‌زمینه',
      'background-origin': 'مبدا پس‌زمینه',
      'background-clip': 'محدوده برش پس‌زمینه',
      'transition-property': 'ویژگی انتقال',
      'transition-duration': 'زمان ترنزیشن',
      'transition-timing-function': 'تابع زمانی سرعت',
      'transition-delay': 'تاخیر شروع حرکت',
      'filter-name': 'نام فیلتر گرافیکی',
      'filter-value': 'مقدار فیلتر',
      'backdrop-filter-name': 'نام فیلتر پشت‌زمینه شیشه‌ای',
      'backdrop-filter-value': 'مقدار فیلتر شیشه‌ای',
      'transform-name': 'نوع تغییر حالت',
      'transform-value': 'مقدار تبدیل',
      'overflow-x': 'سرریز افقی (Overflow X)',
      'overflow-y': 'سرریز عمودی (Overflow Y)'
    },
    optionProps: {
      'flex-direction': {
        title: {
          row: 'سطری (راست به چپ)',
          'row-reverse': 'سطری معکوس',
          column: 'ستونی (عمودی)',
          'column-reverse': 'ستونی معکوس'
        }
      },
      flex: {
        title: {
          auto: 'خودکار',
          fillContainer: 'پر کردن فضا',
          hugContents: 'اندازه محتوا'
        }
      },
      'justify-content': {
        title: {
          'flex-start': 'ابتدای محور',
          center: 'وسط‌چین',
          'flex-end': 'انتهای محور',
          'space-between': 'فاصله مساوی بینابین',
          'space-around': 'فاصله در اطراف',
          'space-evenly': 'فاصله کاملاً یکنواخت'
        }
      },
      'align-self': {
        title: {
          auto: 'خودکار',
          'flex-start': 'شروع',
          center: 'مرکز',
          'flex-end': 'پایان',
          stretch: 'کشش کامل'
        }
      },
      'align-items': {
        title: {
          stretch: 'کشش کامل',
          'flex-start': 'شروع',
          center: 'وسط',
          'flex-end': 'پایان'
        }
      },
      'align-content': {
        title: {
          'flex-start': 'شروع',
          center: 'وسط',
          'flex-end': 'پایان',
          'space-between': 'فاصله‌گذاری مساوی',
          'space-around': 'فاصله در اطراف',
          stretch: 'کشش'
        }
      }
    },
    options: {
      '__background-type': {
        image: 'تصویر',
        gradient: 'طیف رنگی (گرادیانت)',
        color: 'رنگ یکدست'
      },
      display: {
        block: 'بلوکی (Block)',
        inline: 'درون‌خطی (Inline)',
        'inline-block': 'بلوکی درون‌خطی',
        flex: 'انعطاف‌پذیر (Flex)',
        none: 'پنهان (None)'
      },
      overflow: {
        visible: 'نمایان',
        hidden: 'پنهان‌سازی اضافات',
        scroll: 'اسکرول اجباری',
        auto: 'اسکرول خودکار'
      },
      'flex-wrap': {
        nowrap: 'بدون شکست سطر',
        wrap: 'شکستن به خط بعد',
        'wrap-reverse': 'شکستن معکوس'
      }
    }
  }
};

export default faLocale;
