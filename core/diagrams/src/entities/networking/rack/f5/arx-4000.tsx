import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARX_4000 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.arx_4000;',
  },
  _width: 168,
  _height: 60,
}

export function Arx4000(props: DiagramNodeProps) {
  return (
    <Shape {...ARX_4000} {...props} _style={extendStyle(ARX_4000, props)} />
  )
}
