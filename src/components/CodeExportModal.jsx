import React, { useState } from 'react';
import { Modal, Tabs, Button, message, Space, Typography } from 'antd';
import { CopyOutlined, DownloadOutlined, CheckOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

export function CodeExportModal({ open, onClose, html = '', css = '' }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('html');

  const handleCopy = async () => {
    const content = activeTab === 'html' ? html : css;
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      message.success('کد با موفقیت در کلیپ‌بورد کپی شد!');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      message.error('خطا در کپی کردن متن');
    }
  };

  const handleDownload = () => {
    const isHtml = activeTab === 'html';
    const content = isHtml ? html : css;
    const blob = new Blob([content], { type: isHtml ? 'text/html' : 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = isHtml ? 'index.html' : 'style.css';
    a.click();
    URL.revokeObjectURL(url);
    message.success(`فایل ${a.download} با موفقیت دانلود شد.`);
  };

  const tabItems = [
    {
      key: 'html',
      label: 'کد HTML صفحه',
      children: (
        <div style={{ maxHeight: '420px', overflowY: 'auto', background: '#090d16', padding: '16px', borderRadius: '10px', direction: 'ltr', border: '1px solid rgba(148,163,184,0.1)' }}>
          <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '13px', lineHeight: '1.6', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
            {html || '<!-- کدی یافت نشد -->'}
          </pre>
        </div>
      ),
    },
    {
      key: 'css',
      label: 'کدهای CSS استایل',
      children: (
        <div style={{ maxHeight: '420px', overflowY: 'auto', background: '#090d16', padding: '16px', borderRadius: '10px', direction: 'ltr', border: '1px solid rgba(148,163,184,0.1)' }}>
          <pre style={{ margin: 0, color: '#93c5fd', fontSize: '13px', lineHeight: '1.6', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
            {css || '/* استایل اضافی تعریف نشده است */'}
          </pre>
        </div>
      ),
    },
  ];

  return (
    <Modal
      title="مشاهده و خروجی کدهای صفحه"
      open={open}
      onCancel={onClose}
      width={780}
      footer={[
        <Space key="actions">
          <Button icon={<DownloadOutlined />} onClick={handleDownload}>
            دانلود فایل
          </Button>
          <Button type="primary" icon={copied ? <CheckOutlined /> : <CopyOutlined />} onClick={handleCopy}>
            {copied ? 'کپی شد' : 'کپی در کلیپ‌بورد'}
          </Button>
          <Button onClick={onClose}>بستن</Button>
        </Space>,
      ]}
    >
      <Paragraph type="secondary" style={{ marginBottom: 16 }}>
        کدهای استاندارد و بهینه‌سازی‌شده تولید شده توسط استودیو برای استفاده در محیط‌های فرانت‌اند و استقرار در سرور:
      </Paragraph>
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
    </Modal>
  );
}

export default CodeExportModal;
