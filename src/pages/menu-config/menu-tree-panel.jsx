import { Empty, Tag, Tree } from 'antd'
import { renderMenuIcon } from '../../common/menu-icons'

const getTreeTitle = (item) => (
  <div className="config-tree-title">
    <span className="config-tree-icon">{renderMenuIcon(item.icon)}</span>
    <span className="config-tree-name">{item.title}</span>
    <Tag color={item.enabled ? 'success' : 'default'}>
      {item.enabled ? '启用' : '禁用'}
    </Tag>
  </div>
)

const createTreeData = (menus) =>
  menus.map((item) => ({
    key: item.id,
    title: getTreeTitle(item),
    children: item.children?.length ? createTreeData(item.children) : undefined,
  }))

const MenuTreePanel = ({
  draftMenu,
  expandedKeys,
  menus,
  onExpand,
  onSelect,
  selectedId,
}) => {
  const treeData = createTreeData(menus)

  return (
    <section className="menu-tree-panel page-panel">
      <div className="panel-heading">
        <div>
          <h3>菜单列表</h3>
          <span>点击菜单后在右侧编辑</span>
        </div>
      </div>
      {treeData.length ? (
        <Tree
          blockNode
          className="config-tree"
          expandedKeys={expandedKeys}
          onExpand={onExpand}
          onSelect={onSelect}
          selectedKeys={!draftMenu && selectedId ? [selectedId] : []}
          treeData={treeData}
        />
      ) : (
        <Empty description="暂无菜单" />
      )}
    </section>
  )
}

export default MenuTreePanel
