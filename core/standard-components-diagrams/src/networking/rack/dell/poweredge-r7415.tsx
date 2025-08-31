import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWEREDGE_R7415 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_r7415;',
  },
  _width: 162,
  _height: 30,
}

export function PoweredgeR7415(props: DiagramNodeProps) {
  return (
    <Shape
      {...POWEREDGE_R7415}
      {...props}
      _style={extendStyle(POWEREDGE_R7415, props)}
    />
  )
}
