import { Tag } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { getRoleName } from './user-utils'

const UserListPanel = ({ draftUser, onSelect, roles, selectedId, users }) => {
  return (
    <section className="user-list-panel page-panel">
      <div className="panel-heading">
        <div>
          <h3>成员列表</h3>
          <span>当前共 {users.length} 个成员</span>
        </div>
      </div>
      <div className="config-list">
        {users.map((user) => (
          <button
            className={[
              'config-list-item',
              !draftUser && selectedId === user.id ? 'active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            key={user.id}
            onClick={() => onSelect(user.id)}
            type="button"
          >
            <span className="config-list-icon">
              <UserOutlined />
            </span>
            <span className="config-list-content">
              <strong>{user.name || user.username}</strong>
              <em>
                {user.username} · {getRoleName(roles, user.roleId)}
              </em>
            </span>
            <Tag color={user.enabled ? 'success' : 'default'}>
              {user.enabled ? '启用' : '停用'}
            </Tag>
          </button>
        ))}
      </div>
    </section>
  )
}

export default UserListPanel
