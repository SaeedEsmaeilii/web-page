import React from 'react';
import { Layout, Space, Button, Segmented, Dropdown, Tooltip, Tag } from 'antd';
import {
  DesktopOutlined,
  TabletOutlined,
  MobileOutlined,
  EyeOutlined,
  CodeOutlined,
  SaveOutlined,
  UndoOutlined,
  RedoOutlined,
  ClearOutlined,
  SettingOutlined,
  ThunderboltOutlined,
  AppstoreOutlined,
  ImportOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

export function AppHeader({
  device = 'desktop',
  onDeviceChange,
  previewActive = false,
  onTogglePreview,
  onOpenCodeModal,
  onOpenImportModal,
  onOpenSettingsModal,
  onSave,
  onUndo,
  onRedo,
  onClear,
}) {
  const settingsMenu = {
    items: [
      {
        key: 'import',
        icon: <ImportOutlined />,
        label: 'درون‌ریزی کد یا فایل HTML',
        onClick: onOpenImportModal,
      },
      {
        key: 'seo',
        icon: <SettingOutlined />,
        label: 'تنظیمات سئو و متادیتا',
        onClick: onOpenSettingsModal,
      },
      {
        type: 'divider',
      },
      {
        key: 'clear',
        icon: <ClearOutlined />,
        label: 'پاک‌سازی کامل صفحه',
        danger: true,
        onClick: onClear,
      },
    ],
  };

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
        backdropFilter: 'blur(12px)',
        zIndex: 50,
      }}
    >
      {/* Brand & Logo */}
      <Space size={12} align="center">
        <div
          style={{
            width: 38,
            height: 38,
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 18,
            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
          }}
        >
          <ThunderboltOutlined />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            آرتا استودیو
          </span>
          <Tag color="indigo" variant="filled" style={{ margin: 0, fontWeight: 700 }}>
            Ant Design
          </Tag>
        </div>
      </Space>

      {/* Device Switcher */}
      <Segmented
        value={device}
        onChange={onDeviceChange}
        options={[
          {
            value: 'desktop',
            label: 'دسکتاپ',
            icon: <DesktopOutlined />,
          },
          {
            value: 'tablet',
            label: 'تبلت',
            icon: <TabletOutlined />,
          },
          {
            value: 'mobile',
            label: 'موبایل',
            icon: <MobileOutlined />,
          },
        ]}
      />

      {/* Actions Toolbar */}
      <Space size={8} align="center">
        <Tooltip title="بازگردانی تغییر">
          <Button icon={<UndoOutlined />} onClick={onUndo} />
        </Tooltip>
        <Tooltip title="تکرار مجدد">
          <Button icon={<RedoOutlined />} onClick={onRedo} />
        </Tooltip>

        <Button
          type={previewActive ? 'primary' : 'default'}
          icon={<EyeOutlined />}
          onClick={onTogglePreview}
        >
          {previewActive ? 'خروج از پیش‌نمایش' : 'پیش‌نمایش'}
        </Button>

        <Button icon={<CodeOutlined />} onClick={onOpenCodeModal}>
          مشاهده کد
        </Button>

        <Button icon={<ImportOutlined />} onClick={onOpenImportModal}>
          درون‌ریزی کد
        </Button>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={onSave}
          style={{
            background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
          }}
        >
          ذخیره
        </Button>

        <Dropdown menu={settingsMenu} placement="bottomLeft">
          <Button icon={<SettingOutlined />} />
        </Dropdown>
      </Space>
    </Header>
  );
}

export default AppHeader;
