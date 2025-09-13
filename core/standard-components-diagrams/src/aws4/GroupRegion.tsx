import { Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GROUP_REGION = {
  _color: '#00A4A6',
  _icon: 'mxgraph.aws4.container_region',
}

export function GroupRegion(props: DiagramNodeProps) {
  return <Shape {...GROUP_REGION} {...props} />
}
