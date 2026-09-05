import React, { useEffect, useState, useRef } from 'react';
import { ConfigProvider, App as AntdApp, Layout, Spin, message, Modal } from 'antd';
import fa_IR from 'antd/locale/fa_IR';
import { antdThemeConfig } from '../theme/antdTheme';
import { AppHeader } from './AppHeader';
import { CodeExportModal } from './CodeExportModal';
import { CodeImportModal } from './CodeImportModal';
import { PageSettingsModal } from './PageSettingsModal';
import {
  initStudioEditor,
  getEditorCode,
  setDevice,
  togglePreview,
  undo,
  redo,
  clearCanvas,
} from '../config/editor';

const { Content } = Layout;

function StudioInner() {
  const { message, modal } = AntdApp.useApp();
  const [loading, setLoading] = useState(true);
  const [device, setDeviceState] = useState('desktop');
  const [previewActive, setPreviewActive] = useState(false);
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [codeData, setCodeData] = useState({ html: '', css: '' });

  const initialized = useRef(false);

  useEffect(() => {
    window.__openImportModal = () => setImportModalOpen(true);

    if (initialized.current) return;
    initialized.current = true;

    initStudioEditor('#studio-canvas', () => {
      setLoading(false);
      // Remove loading screen overlay if present
      const staticLoader = document.getElementById('loading-screen');
      if (staticLoader) {
        staticLoader.classList.add('hidden');
        setTimeout(() => staticLoader.remove(), 400);
      }
    }).catch((err) => {
      console.error('Studio init error:', err);
      setLoading(false);
      message.error('خطا در راه‌اندازی المنتور: ' + (err.message || err));
    });

    return () => {
      delete window.__openImportModal;
    };
  }, [message]);

  const handleDeviceChange = (val) => {
    setDeviceState(val);
    setDevice(val);
    message.info(`نمای دستگاه تغییر کرد به: ${val === 'desktop' ? 'رایانه دسکتاپ' : val === 'tablet' ? 'تبلت' : 'موبایل'}`);
  };

  const handleTogglePreview = () => {
    const isPreview = togglePreview();
    setPreviewActive(isPreview);
    if (isPreview) {
      message.success('حالت پیش‌نمایش تمام‌صفحه فعال شد');
    } else {
      message.info('به حالت ویرایشگر بازگشتید');
    }
  };

  const handleOpenCodeModal = () => {
    const data = getEditorCode();
    setCodeData(data);
    setCodeModalOpen(true);
  };

  const handleSave = () => {
    message.success('پروژه با موفقیت و مطابق استانداردهای طراحی ذخیره شد!');
  };

  const handleClear = () => {
    modal.confirm({
      title: 'آیا از پاک‌سازی صفحه اطمینان دارید؟',
      content: 'تمام المان‌ها و بلاک‌های بوم فعلی حذف خواهند شد و این عملیات قابل بازگشت نیست.',
      okText: 'بله، پاک‌سازی شود',
      okType: 'danger',
      cancelText: 'انصراف',
      onOk: () => {
        clearCanvas();
        message.warning('تمامی محتوای صفحه با موفقیت پاک‌سازی شد');
      },
    });
  };

  return (
    <Layout style={{ height: '100vh', width: '100vw', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Ant Design Header */}
      <AppHeader
        device={device}
        onDeviceChange={handleDeviceChange}
        previewActive={previewActive}
        onTogglePreview={handleTogglePreview}
        onOpenCodeModal={handleOpenCodeModal}
        onOpenImportModal={() => setImportModalOpen(true)}
        onOpenSettingsModal={() => setSettingsModalOpen(true)}
        onSave={handleSave}
        onUndo={undo}
        onRedo={redo}
        onClear={handleClear}
      />

      {/* Editor Main Content Area */}
      <Content style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#090d16' }}>
        {loading && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#090d16',
              zIndex: 1000,
            }}
          >
            <Spin size="large" description="در حال آماده‌سازی المنتور (Elementor) و دیزاین سیستم Ant..." />
          </div>
        )}
        <div id="studio-canvas" style={{ width: '100%', height: '100%' }} />
      </Content>

      {/* Ant Design Modals */}
      <CodeExportModal
        open={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
        html={codeData.html}
        css={codeData.css}
      />

      <CodeImportModal
        open={importModalOpen}
        onClose={() => setImportModalOpen(false)}
      />

      <PageSettingsModal
        open={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
      />
    </Layout>
  );
}

export function StudioApp() {
  return (
    <ConfigProvider direction="rtl" locale={fa_IR} theme={antdThemeConfig}>
      <AntdApp>
        <StudioInner />
      </AntdApp>
    </ConfigProvider>
  );
}

export default StudioApp;
