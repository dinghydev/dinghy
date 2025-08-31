import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARX_2500 = {
  _style:
    'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.arx_2500;',
  _width: 168,
  _height: 20,
}

export function Arx2500(props: DiagramNodeProps) {
  return (
    <Shape {...ARX_2500} {...props} _style={extendStyle(ARX_2500, props)} />
  )
}
