import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARX_1000 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.arx_1000;',
  _width: 168,
  _height: 40,
}

export function Arx1000(props: DiagramNodeProps) {
  return (
    <Shape {...ARX_1000} {...props} _style={extendStyle(ARX_1000, props)} />
  )
}
