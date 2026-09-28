// server-src/index.js
const jsonServer = require('json-server')
const { setupMenuRoutes } = require('./routes/menu-routes')
const { setupRoleRoutes } = require('./routes/role-routes')
const {
  setupTransactionCategoryRoutes,
} = require('./routes/transaction-category-routes')
const { setupTransactionRoutes } = require('./routes/transaction-routes')
const { setupUserRoutes } = require('./routes/user-routes')

// 创建服务器实例
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

// 启用基础中间件（CORS、JSON解析等）
server.use(middlewares)
// 覆盖默认的 body-parser，将请求体上限提高到 50mb，防止大批量提交被截断
server.use(require('express').json({ limit: '50mb' }))
server.use(require('express').urlencoded({ extended: true, limit: '50mb' }))

// 配置业务路由
setupMenuRoutes(server)
setupRoleRoutes(server)
setupTransactionCategoryRoutes(server)
setupTransactionRoutes(server)
setupUserRoutes(server)

// 启动服务器
const PORT = process.env.PORT || 5511
server.listen(PORT, () => {
  console.log(`后端服务运行在 http://localhost:${PORT}`)
})
