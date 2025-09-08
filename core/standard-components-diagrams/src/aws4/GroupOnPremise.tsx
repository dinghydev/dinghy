import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GROUP_ON_PREMISE = {
  _icon: 'mxgraph.aws4.group_on_premise',
}

export function GroupOnPremise(props: DiagramNodeProps) {
  return <Shape {...GROUP_ON_PREMISE} {...props} />
}
