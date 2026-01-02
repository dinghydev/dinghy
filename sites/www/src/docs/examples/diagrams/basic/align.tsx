import { Shape } from '@dinghy/base-components'

export default function Stack() {
  return (
    <Shape _title='Align Example' _direction='vertical'>
      <Shape _title='Entity'>
        <Shape _align='left' _verticalAlign='top'>left top</Shape>
        <Shape _align='center' _verticalAlign='middle'>
          center middle
        </Shape>
        <Shape _align='right' _verticalAlign='bottom'>
          right bottom
        </Shape>
      </Shape>
      <Shape _title='Container'>
        <Shape _align='left' _verticalAlign='top'>
          left top
          <Shape>child</Shape>
        </Shape>
        <Shape _align='center' _verticalAlign='middle'>
          center middle
          <Shape>child</Shape>
        </Shape>
        <Shape _align='right' _verticalAlign='bottom'>
          right bottom
          <Shape>child</Shape>
        </Shape>
      </Shape>
    </Shape>
  )
}
