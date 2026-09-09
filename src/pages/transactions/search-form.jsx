import { useEffect, useRef } from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Select } from 'antd'

const { RangePicker } = DatePicker
const SEARCH_DELAY = 300

const TransactionSearchForm = ({
  categoryOptions,
  dateFormat,
  form,
  onExport,
  onSearch,
  typeOptions,
}) => {
  const searchTimerRef = useRef(null)

  useEffect(
    () => () => {
      window.clearTimeout(searchTimerRef.current)
    },
    []
  )

  const handleValuesChange = (changedValues, values) => {
    const shouldClearClassification = Object.prototype.hasOwnProperty.call(
      changedValues,
      'type'
    )
    const nextValues = shouldClearClassification
      ? { ...values, classification: undefined }
      : values

    if (shouldClearClassification) {
      form.setFieldsValue({ classification: undefined })
    }

    window.clearTimeout(searchTimerRef.current)
    searchTimerRef.current = window.setTimeout(() => {
      onSearch(nextValues)
    }, SEARCH_DELAY)
  }

  return (
    <Form
      className="search-form-wrap"
      form={form}
      layout="inline"
      onFinish={onSearch}
      onValuesChange={handleValuesChange}
    >
      <Form.Item
        className="search-form-field search-form-date"
        label="日期范围"
        name="dateRange"
      >
        <RangePicker format={dateFormat} />
      </Form.Item>

      <Form.Item
        className="search-form-field search-form-type"
        label="交易类型"
        name="type"
      >
        <Select
          allowClear
          options={typeOptions}
          placeholder="请选择类型"
          style={{ width: 120 }}
        />
      </Form.Item>

      <Form.Item
        className="search-form-field search-form-class"
        label="分类"
        name="classification"
      >
        <Select
          allowClear
          disabled={!categoryOptions.length}
          options={categoryOptions}
          placeholder="请选择分类"
          style={{ width: 140 }}
        />
      </Form.Item>

      <Form.Item
        className="search-form-field search-form-describe"
        label="描述关键词"
        name="describe"
      >
        <Input allowClear placeholder="请输入描述" />
      </Form.Item>

      <Form.Item className="search-form-actions">
        <Button
          className="transaction-export-button"
          htmlType="button"
          icon={<DownloadOutlined />}
          onClick={onExport}
          type="text"
        >
          导出
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TransactionSearchForm
