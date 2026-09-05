import React from 'react';
import { Modal, Form, Input, Switch, Row, Col, message } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export function PageSettingsModal({ open, onClose }) {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Page SEO Settings:', values);
    message.success('تنظیمات سئو و متادیتا با موفقیت ذخیره شد.');
    onClose();
  };

  return (
    <Modal
      title={
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <SettingOutlined style={{ color: '#6366f1' }} />
          <span>تنظیمات سئو و متادیتای صفحه</span>
        </span>
      }
      open={open}
      onCancel={onClose}
      onOk={() => form.submit()}
      okText="ذخیره تنظیمات"
      cancelText="انصراف"
      width={640}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{
          pageTitle: 'صفحه اصلی - المنتور',
          slug: 'home',
          metaDescription: 'پلتفرم پیشرفته طراحی بصری و واکنش‌گرای وب‌سایت با المنتور و دیزاین سیستم Ant Design.',
          keywords: 'المنتور, صفحه‌ساز, طراحی وب, ری‌اکت, elementor',
          indexSearchEngines: true,
        }}
        style={{ marginTop: 20 }}
      >
        <Row gutter={16}>
          <Col span={14}>
            <Form.Item
              name="pageTitle"
              label="عنوان سئو صفحه (Page Title)"
              rules={[{ required: true, message: 'لطفاً عنوان صفحه را وارد کنید' }]}
            >
              <Input placeholder="مثال: صفحه اصلی | فروشگاه من" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              name="slug"
              label="آدرس یکتا (URL Slug)"
              rules={[{ required: true, message: 'لطفاً اسلاگ را وارد کنید' }]}
            >
              <Input placeholder="home" prefix="/" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="metaDescription" label="توضیحات متا (Meta Description)">
          <Input.TextArea
            rows={3}
            placeholder="توضیح مختصر ۱۲۰ تا ۱۶۰ کاراکتری برای نتایج گوگل و شبکه‌های اجتماعی..."
          />
        </Form.Item>

        <Form.Item name="keywords" label="کلمات کلیدی (Keywords)">
          <Input placeholder="کلمات را با کاما جدا کنید..." />
        </Form.Item>

        <Form.Item
          name="indexSearchEngines"
          label="مجوز ایندکس توسط موتورهای جستجو (Robots Index)"
          valuePropName="checked"
        >
          <Switch checkedChildren="فعال" unCheckedChildren="غیرفعال" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default PageSettingsModal;
