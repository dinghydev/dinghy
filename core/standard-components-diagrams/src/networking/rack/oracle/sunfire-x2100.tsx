import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUNFIRE_X2100 = {
  _style:
    'shape=mxgraph.rack.oracle.sunfire_x2100;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 162,
  _height: 15,
}

export function SunfireX2100(props: DiagramNodeProps) {
  return <Shape {...SUNFIRE_X2100} {...props} />
}
