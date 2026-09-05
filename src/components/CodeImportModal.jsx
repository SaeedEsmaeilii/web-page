import React, { useState } from 'react';
import { Modal, Tabs, Input, Button, Radio, Upload, Space, Typography, Alert, message } from 'antd';
import {
  ImportOutlined,
  UploadOutlined,
  CodeOutlined,
  FileTextOutlined,
  InboxOutlined,
} from '@ant-design/icons';
import { importCode } from '../config/editor';

const { Paragraph } = Typography;
const { Dragger } = Upload;

export function CodeImportModal({ open, onClose }) {
  const [code, setCode] = useState('');
  const [importMode, setImportMode] = useState('replace'); // 'replace' | 'append'
  const [activeTab, setActiveTab] = useState('text');

  const handleImport = () => {
    if (!code.trim()) {
      message.warning('لطفاً ابتدا کد HTML یا فایل مورد نظر خود را وارد کنید.');
      return;
    }

    try {
      const success = importCode(code, importMode);
      if (success) {
        message.success(
          importMode === 'replace'
            ? 'محتوای صفحه با موفقیت جایگزین و درون‌ریزی شد!'
            : 'کد جدید با موفقیت به انتهای صفحه افزوده شد!'
        );
        setCode('');
        onClose();
      } else {
        message.error('خطا در بارگذاری ادیتور یا پردازش کدهای ورودی');
      }
    } catch (err) {
      console.error('Import error:', err);
      message.error('خطا در درون‌ریزی: ' + (err?.message || err));
    }
  };

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
      setCode(fileContent);
      message.success(`فایل ${file.name} با موفقیت خوانده شد. اکنون می‌توانید آن را درون‌ریزی کنید.`);
      setActiveTab('text');
    };
    reader.onerror = () => {
      message.error('خطا در خواندن فایل انتخاب شده');
    };
    reader.readAsText(file);
    return false; // prevent upload request
  };

  const tabItems = [
    {
      key: 'text',
      label: (
        <span>
          <CodeOutlined /> درج مستقیم کد HTML/CSS
        </span>
      ),
      children: (
        <div>
          <div style={{ marginBottom: 12, display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 13, color: '#94a3b8' }}>کدهای نمونه برای تست سریع:</span>
            <Button
              size="small"
              onClick={() => {
                setCode(`<!-- نمونه کارت مدرن با CSS سفارشی و انیمیشن -->
<div class="custom-card">
  <div class="card-badge">ویژه آرتا استودیو</div>
  <h2 class="card-title">طراحی وب فوق‌العاده مدرن</h2>
  <p class="card-desc">این کامپوننت با استایل‌های CSS درون‌خطی و فونت فارسی وزیرمتن طراحی شده و به صورت ۱۰۰٪ روی بوم اعمال می‌شود.</p>
  <div class="card-actions">
    <button class="btn-glow">مشاهده جزئیات</button>
    <button class="btn-outline">اشتراک‌گذاری</button>
  </div>
</div>

<style>
  .custom-card {
    max-width: 520px;
    margin: 40px auto;
    padding: 32px;
    background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
    border: 1px solid rgba(99, 102, 241, 0.4);
    border-radius: 20px;
    box-shadow: 0 20px 40px -15px rgba(99, 102, 241, 0.3);
    color: #ffffff;
    direction: rtl;
    text-align: right;
    font-family: 'Vazirmatn', system-ui, sans-serif;
  }
  .card-badge {
    display: inline-block;
    padding: 4px 14px;
    background: rgba(99, 102, 241, 0.2);
    color: #818cf8;
    border: 1px solid rgba(99, 102, 241, 0.5);
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .card-title {
    font-size: 24px;
    font-weight: 800;
    color: #f8fafc;
    margin: 0 0 12px 0;
  }
  .card-desc {
    font-size: 14.5px;
    line-height: 1.8;
    color: #cbd5e1;
    margin-bottom: 24px;
  }
  .card-actions {
    display: flex;
    gap: 12px;
  }
  .btn-glow {
    padding: 10px 22px;
    background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
    color: #ffffff;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.5);
    transition: all 0.2s ease;
  }
  .btn-glow:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.7);
  }
  .btn-outline {
    padding: 10px 20px;
    background: transparent;
    color: #94a3b8;
    border: 1px solid #334155;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .btn-outline:hover {
    color: #ffffff;
    border-color: #6366f1;
  }
</style>`);
              }}
            >
              کارت CSS سفارشی
            </Button>
            <Button
              size="small"
              onClick={() => {
                setCode(`<!-- نمونه کامل طراحی با کلاس‌های مدرن Tailwind CSS -->
<div class="max-w-xl mx-auto my-10 p-8 bg-slate-900 border border-indigo-500/30 rounded-3xl shadow-2xl text-right dir-rtl font-['Vazirmatn']">
  <div class="flex items-center justify-between mb-6">
    <span class="px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-full">فعال و آماده</span>
    <span class="text-xs text-slate-400">نسخه ۴.۲</span>
  </div>
  <h3 class="text-2xl font-bold text-white mb-3">داشبورد هوشمند با Tailwind CSS</h3>
  <p class="text-slate-300 text-sm leading-relaxed mb-6">
    این کامپوننت مستقیماً از کلاس‌های مدرن Tailwind CSS استفاده می‌کند و تمامی استایل‌های رنگ، چیدمان Flex، حاشیه‌ها و سایه‌ها به زیبایی نمایش داده می‌شوند.
  </p>
  <div class="grid grid-cols-2 gap-4 mb-6">
    <div class="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
      <div class="text-indigo-400 text-xl font-bold">۹۸.۵٪</div>
      <div class="text-xs text-slate-400 mt-1">نرخ رضایت کاربران</div>
    </div>
    <div class="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
      <div class="text-indigo-400 text-xl font-bold">۲,۴۵۰+</div>
      <div class="text-xs text-slate-400 mt-1">قالب‌های فعال</div>
    </div>
  </div>
  <button class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200">
    تایید و ادامه فرآیند
  </button>
</div>`);
              }}
            >
              طراحی با Tailwind CSS
            </Button>
          </div>
          <Input.TextArea
            rows={12}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="<!-- کدهای HTML یا سند وب خود را اینجا Paste کنید... -->\n<div class='my-card'>\n  <h2>سلام دنیا</h2>\n</div>\n<style>\n  .my-card { padding: 20px; }\n</style>"
            style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              lineHeight: '1.6',
              direction: 'ltr',
              background: '#090d16',
              color: '#f1f5f9',
              borderRadius: 10,
            }}
          />
        </div>
      ),
    },
    {
      key: 'file',
      label: (
        <span>
          <UploadOutlined /> بارگذاری فایل HTML
        </span>
      ),
      children: (
        <div style={{ padding: '20px 0' }}>
          <Dragger
            accept=".html,.htm,.txt"
            beforeUpload={handleFileUpload}
            showUploadList={false}
            style={{
              padding: 30,
              background: '#090d16',
              border: '2px dashed rgba(99, 102, 241, 0.4)',
              borderRadius: 14,
            }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined style={{ color: '#6366f1', fontSize: 48 }} />
            </p>
            <p className="ant-upload-text" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc' }}>
              فایل HTML مورد نظر را اینجا بکشید یا کلیک کنید
            </p>
            <p className="ant-upload-hint" style={{ color: '#94a3b8' }}>
              پشتیبانی از فایل‌های index.html یا صفحات طراحی‌شده با فرمت HTML / HTM
            </p>
          </Dragger>
        </div>
      ),
    },
  ];

  return (
    <Modal
      title={
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ImportOutlined style={{ color: '#6366f1' }} />
          <span>درون‌ریزی کد و قالب (Import Code)</span>
        </span>
      }
      open={open}
      onCancel={onClose}
      width={760}
      footer={[
        <div key="footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <Radio.Group
            value={importMode}
            onChange={(e) => setImportMode(e.target.value)}
            style={{ textAlign: 'right' }}
          >
            <Radio value="replace">جایگزینی کامل بوم</Radio>
            <Radio value="append">افزودن به انتهای صفحه</Radio>
          </Radio.Group>

          <Space>
            <Button onClick={onClose}>انصراف</Button>
            <Button
              type="primary"
              icon={<ImportOutlined />}
              onClick={handleImport}
              style={{
                background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
              }}
            >
              درون‌ریزی به صفحه
            </Button>
          </Space>
        </div>,
      ]}
    >
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
    </Modal>
  );
}

export default CodeImportModal;
