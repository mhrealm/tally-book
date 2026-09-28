import { Tag } from 'antd'
import { SafetyOutlined } from '@ant-design/icons'

const RoleListPanel = ({ draftRole, onSelect, roles, selectedId }) => {
  return (
    <section className="role-list-panel page-panel">
      <div className="panel-heading">
        <div>
          <h3>角色列表</h3>
          <span>当前共 {roles.length} 个角色</span>
        </div>
      </div>
      <div className="config-list">
        {roles.map((role) => (
          <button
            className={[
              'config-list-item',
              !draftRole && selectedId === role.id ? 'active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            key={role.id}
            onClick={() => onSelect(role.id)}
            type="button"
          >
            <span className="config-list-icon">
              <SafetyOutlined />
            </span>
            <span className="config-list-content">
              <strong>{role.name}</strong>
              <em>{role.description || '暂无描述'}</em>
            </span>
            <Tag color={role.enabled ? 'success' : 'default'}>
              {role.enabled ? '启用' : '停用'}
            </Tag>
          </button>
        ))}
      </div>
    </section>
  )
}

export default RoleListPanel
