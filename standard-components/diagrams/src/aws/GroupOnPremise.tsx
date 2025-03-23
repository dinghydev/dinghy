import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GROUP_ON_PREMISE = {
  _icon: 'mxgraph.aws4.group_on_premise',
}

export default function GroupOnPremise(props: DiagramNodeProps) {
  return <Shape {...GROUP_ON_PREMISE} {...props} />
}
