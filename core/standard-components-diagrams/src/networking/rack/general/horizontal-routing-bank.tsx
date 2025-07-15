import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_ROUTING_BANK = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rackGeneral.horRoutingBank;',
  _width: 160,
  _height: 20,
}

export function HorizontalRoutingBank(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_ROUTING_BANK} {...props} />
}
