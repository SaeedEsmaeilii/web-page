import { theme } from 'antd';

/**
 * پیکربندی تم تاریک و توکن‌های طراحی Ant Design هماهنگ با هویت بصری استودیو
 */
export const antdThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#6366f1',
    colorPrimaryHover: '#818cf8',
    colorPrimaryActive: '#4f46e5',
    colorInfo: '#6366f1',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    fontFamily: "'Vazirmatn', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    borderRadius: 10,
    wireframe: false,
    colorBgBase: '#090d16',
    colorBgContainer: '#0f172a',
    colorBgElevated: '#1e293b',
    colorBorder: 'rgba(148, 163, 184, 0.15)',
    colorBorderSecondary: 'rgba(148, 163, 184, 0.08)',
    colorText: '#f8fafc',
    colorTextSecondary: '#94a3b8',
    colorTextHeading: '#ffffff',
  },
  components: {
    Layout: {
      headerBg: 'rgba(15, 23, 42, 0.85)',
      bodyBg: '#090d16',
      headerPadding: '0 20px',
      headerHeight: 64,
    },
    Button: {
      borderRadius: 10,
      controlHeight: 38,
      fontWeight: 600,
    },
    Segmented: {
      itemSelectedBg: '#6366f1',
      itemSelectedColor: '#ffffff',
      trackBg: '#1e293b',
      borderRadius: 10,
      controlHeight: 38,
    },
    Modal: {
      contentBg: '#0f172a',
      headerBg: '#0f172a',
      borderRadiusLG: 16,
    },
    Drawer: {
      colorBgElevated: '#0f172a',
    },
    Form: {
      labelColor: '#e2e8f0',
      labelFontSize: 14,
    },
    Input: {
      colorBgContainer: '#1e293b',
      activeBorderColor: '#6366f1',
      hoverBorderColor: '#818cf8',
    },
  },
};

export default antdThemeConfig;
