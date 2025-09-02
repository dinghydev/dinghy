import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWEREDGE_R740XD = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_r740xd;',
  },
  _original_width: 162,
  _original_height: 30,
}

export function PoweredgeR740xd(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWEREDGE_R740XD}
      {...props}
      _style={extendStyle(POWEREDGE_R740XD, props)}
    />
  )
}
