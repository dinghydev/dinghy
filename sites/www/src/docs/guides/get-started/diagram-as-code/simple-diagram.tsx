import { Shape } from '@dinghy/base-components'

export default function Stack() {
  return (
    <Shape _title='Simple diagram as code'>
      <Shape _dependsOn='B'>A</Shape>
      <Shape>B</Shape>
    </Shape>
  )
}
