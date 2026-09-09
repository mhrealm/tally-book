import { Radio } from 'antd'
import { CATEGORY_TYPES } from './category-utils'

const CategoryFilter = ({
  activeType,
  onTypeChange,
}) => {
  return (
    <div className="category-config-filter">
      <Radio.Group
        buttonStyle="solid"
        onChange={(event) => onTypeChange(event.target.value)}
        optionType="button"
        options={CATEGORY_TYPES.map((type) => ({
          label: `${type}类型`,
          value: type,
        }))}
        value={activeType}
      />
    </div>
  )
}

export default CategoryFilter
