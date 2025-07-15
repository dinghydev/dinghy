import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARX_2000 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.arx_2000;',
  _width: 168,
  _height: 40,
}

export function Arx2000(props: DiagramNodeProps) {
  return <Shape {...ARX_2000} {...props} />
}
