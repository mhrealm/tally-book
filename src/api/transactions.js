import request from '../utils/request'

// 查询交易记录列表，支持日期范围、类型、分类、描述和月份筛选。
export const getAllTransactions = (data) => {
  return request.get('/transactions', { params: data })
}

// 根据交易 ID 获取单条交易记录。
export const getTransactionsById = (id) => {
  return request.get(`/transactions/${id}`)
}

// 新增单条交易记录。
export const addTransactions = (data) => {
  return request.post('/transactions', data)
}

// 单次请求体超过约 25KB 时 Vite 代理转发会被本机拦截（502），留出余量
const BATCH_MAX_BYTES = 20 * 1024
const encoder = new TextEncoder()

const splitByBytes = (list) => {
  const chunks = []
  let current = []
  let size = 2

  for (const item of list) {
    const itemSize = encoder.encode(JSON.stringify(item)).length + 1

    if (current.length && size + itemSize > BATCH_MAX_BYTES) {
      chunks.push(current)
      current = []
      size = 2
    }

    current.push(item)
    size += itemSize
  }

  if (current.length) {
    chunks.push(current)
  }

  return chunks
}

// 批量新增交易记录，按请求体大小分批顺序提交，遇到失败即停止并返回已保存部分。
export const batchAddTransactions = async (dataList) => {
  const saved = []

  for (const chunk of splitByBytes(dataList)) {
    let res

    try {
      res = await request.post('/transactions/batch', chunk)
    } catch (error) {
      res = { msg: error?.response?.data?.msg || error?.message }
    }

    if (res?.code !== 200) {
      const failedMsg = res?.msg || '批量保存失败'

      return {
        code: res?.code ?? 500,
        msg: saved.length
          ? `已保存 ${saved.length} 条，剩余 ${dataList.length - saved.length} 条保存失败：${failedMsg}`
          : failedMsg,
        data: saved,
      }
    }

    saved.push(...(res.data || chunk))
  }

  return { code: 200, msg: '批量添加交易成功', data: saved }
}

// 根据交易 ID 更新交易记录。
export const updateTransactions = (id, data) => {
  return request.put(`/transactions/${id}`, data)
}

// 根据交易 ID 删除交易记录。
export const deleteTransactions = (id) => {
  return request.delete(`/transactions/${id}`)
}

// 导出全部交易记录。
export const exportAllTransactions = () => {
  return request.get('/transactions/export')
}

// 导入交易记录数据。
export const importTransactions = (data) => {
  return request.post('/transactions/import', data)
}
