import { Dependency, Shape } from '@dinghy/base-components'

export default function Stack() {
  return (
    <Shape _title='Arrows Example' _direction='vertical'>
      <Shape _title='Default'>
        <Shape _dependsOn='B'>A</Shape>
        <Shape>B</Shape>
      </Shape>
      <Shape _title='Start'>
        <Shape _dependsOn='D' _arrow='start'>C</Shape>
        <Shape>D</Shape>
      </Shape>
      <Shape _title='Both'>
        <Shape _dependsOn='F' _arrow='both'>E</Shape>
        <Shape>F</Shape>
      </Shape>
      <Shape _title='End'>
        <Shape _dependsOn='H' _arrow='end'>G</Shape>
        <Shape>H</Shape>
      </Shape>
      <Shape _title='Inactive Dependency'>
        <Shape>
          I
          <Dependency _target='J' _display='inactive' />
        </Shape>
        <Shape>J</Shape>
      </Shape>
    </Shape>
  )
}
