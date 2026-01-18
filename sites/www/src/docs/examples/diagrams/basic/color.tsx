import { Shape } from '@dinghy/base-components'

export default () => (
  <Shape _title='Color Example' _direction='vertical'>
    <Shape _color='blue'>Colored Shape</Shape>
    <Shape _title='Color on parent only' _color='green'>
      <Shape>A</Shape>
    </Shape>
    <Shape
      _title='Background for parent'
      _background='lightgrey'
      _width={200}
    >
      <Shape>A</Shape>
    </Shape>
    <Shape
      _title='Background for children'
      _background='lightgrey'
      _width={200}
    >
      <Shape _background='transparent'>A</Shape>
    </Shape>
  </Shape>
)
