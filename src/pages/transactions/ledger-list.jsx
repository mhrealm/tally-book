import dayjs from 'dayjs'
import { Empty } from 'antd'

const TransactionLedger = ({
  activeMonth,
  formatAmount,
  getCategoryLabel,
  getTypeLabel,
  groupedTransactions,
  monthGroups,
  onDelete,
  onEdit,
  onMonthSelect,
  transactions,
}) => {
  return (
    <section className="transaction-ledger">
      <aside className="ledger-months">
        {monthGroups.length ? (
          monthGroups.map((group) => (
            <button
              className={[
                'ledger-month-item',
                group.monthKey === activeMonth ? 'active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              key={group.monthKey}
              onClick={() => onMonthSelect(group.monthKey)}
              type="button"
            >
              <strong>
                {group.monthKey.slice(0, 4)}年
                {Number(group.monthKey.slice(5))}月
              </strong>
              <em>结余 {formatAmount(group.balance)}</em>
              <small>
                <span>收入 {formatAmount(group.income)}</span>
                <span>支出 {formatAmount(group.expense)}</span>
              </small>
            </button>
          ))
        ) : (
          <Empty description="暂无月份" />
        )}
      </aside>

      <section className="ledger-records">
        <div className="ledger-table-head">
          <span>分类</span>
          <span>金额</span>
          <span>账户</span>
          <span>成员</span>
          <span>时间</span>
          <span>备注</span>
          <span>操作</span>
        </div>

        <div className="ledger-scroll">
          {transactions.length ? (
            Object.entries(groupedTransactions).map(([date, items]) => (
              <div className="ledger-date-group" key={date}>
                <div className="ledger-date-title">
                  {dayjs(date).format('M月D日 dddd')}
                </div>
                {items.map((item) => {
                  const categoryLabel = getCategoryLabel(item.classification)
                  const typeLabel = getTypeLabel(item.type)
                  const isIncome = typeLabel === '收入'

                  return (
                    <article className="ledger-row" key={item.id}>
                      <div className="ledger-category">
                        <span>{categoryLabel.slice(0, 1)}</span>
                        <strong>{categoryLabel}</strong>
                      </div>
                      <b className={isIncome ? 'income' : 'expense'}>
                        {formatAmount(item.amount)}
                      </b>
                      <span>{isIncome ? '收入账户' : '现金'}</span>
                      <span>管理员</span>
                      <span>{item.date}</span>
                      <span>{item.describe || '-'}</span>
                      <div className="ledger-actions">
                        <button type="button" onClick={() => onEdit(item)}>
                          编辑
                        </button>
                        <button type="button" onClick={() => onDelete(item)}>
                          删除
                        </button>
                      </div>
                    </article>
                  )
                })}
              </div>
            ))
          ) : (
            <Empty className="ledger-empty" description="暂无交易记录" />
          )}
        </div>
      </section>
    </section>
  )
}

export default TransactionLedger
