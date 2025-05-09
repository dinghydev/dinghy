import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GROUP_REGION = {
  _color: '#00A4A6',
  _icon: 'mxgraph.aws4.group_region',
}

export function GroupRegion(props: DiagramNodeProps) {
  return <Shape {...GROUP_REGION} {...props} />
}
