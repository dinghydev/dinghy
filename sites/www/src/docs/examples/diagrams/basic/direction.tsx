import { Shape } from '@dinghy/base-components'

export default () => (
  <Shape _title='Direction Example' _direction='vertical'>
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
