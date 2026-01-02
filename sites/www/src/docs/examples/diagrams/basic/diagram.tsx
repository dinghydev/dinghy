import { Shape } from '@dinghy/base-components'

export default function Stack() {
  return (
    <Shape _title='Diagram Example' _direction='vertical'>
      <Shape _title='Default (horizontal)'>
        <Shape>A</Shape>
        <Shape>B</Shape>
      </Shape>
      <Shape _title='Vertical' _direction='vertical'>
        <Shape>A</Shape>
        <Shape>B</Shape>
      </Shape>
    </Shape>
  )
}
