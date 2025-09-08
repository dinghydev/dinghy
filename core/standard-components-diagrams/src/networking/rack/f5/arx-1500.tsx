import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARX_1500 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.arx_1500;',
  },
  _original_width: 168,
  _original_height: 20,
}

export function Arx1500(props: DiagramNodeProps) {
  return (
    <Shape {...ARX_1500} {...props} _style={extendStyle(ARX_1500, props)} />
  )
}
