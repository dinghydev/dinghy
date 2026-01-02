import { Shape } from '@dinghy/base-components'

export default function Stack() {
  return (
    <Shape _title='Multiple Views Example'>
      <Shape _title='Default View'>
        <Shape>Default Overview Shape 1</Shape>
        <Shape>Default Overview Shape 2</Shape>
      </Shape>
      <Shape
        _view={['overview', 'all-view']}
        _title='All View'
      >
        <Shape>All View Shape 1</Shape>
        <Shape>All View Shape 2</Shape>
      </Shape>
      <Shape
        _view='sub-view-only'
        _title='Sub View Only'
      >
        <Shape>Sub View Only Shape 1</Shape>
        <Shape>Sub View Only Shape 2</Shape>
      </Shape>
    </Shape>
  )
}
