import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWEREDGE_M420 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_m420;',
  },
  _original_width: 20,
  _original_height: 37,
}

export function PoweredgeM420(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWEREDGE_M420}
      {...props}
      _style={extendStyle(POWEREDGE_M420, props)}
    />
  )
}
