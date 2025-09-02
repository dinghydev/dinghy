import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARX_2000 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.f5.arx_2000;',
  },
  _original_width: 168,
  _original_height: 40,
}

export function Arx2000(props: DiagramNodeProps) {
  return (
    <Shape {...ARX_2000} {...props} _style={extendStyle(ARX_2000, props)} />
  )
}
