import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HORIZONTAL_CABLE_DUCT = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rackGeneral.horCableDuct;',
  _width: 160,
  _height: 15,
}

export function HorizontalCableDuct(props: DiagramNodeProps) {
  return <Shape {...HORIZONTAL_CABLE_DUCT} {...props} />
}
