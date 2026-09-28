import { getCategoryIconUrl } from '../../common/category-icons'
import './index.less'

const CategoryIcon = ({ className, label, value }) => {
  const iconUrl = getCategoryIconUrl(value)
  const classes = [className, iconUrl ? 'category-icon-image' : '']
    .filter(Boolean)
    .join(' ')

  if (iconUrl) {
    return (
      <span className={classes} style={{ backgroundImage: `url(${iconUrl})` }} />
    )
  }

  return <span className={classes}>{String(label || value || '').slice(0, 1)}</span>
}

export const renderCategoryOption = ({ label, value }) => (
  <span className="category-option">
    <CategoryIcon className="category-option-icon" label={label} value={value} />
    <span className="category-option-label">{label}</span>
  </span>
)

export default CategoryIcon
