import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GROUP_ON_PREMISE = {
  _icon: 'mxgraph.aws4.group_on_premise',
}

export function GroupOnPremise(props: DiagramNodeProps) {
  return <Shape {...GROUP_ON_PREMISE} {...props} />
}
