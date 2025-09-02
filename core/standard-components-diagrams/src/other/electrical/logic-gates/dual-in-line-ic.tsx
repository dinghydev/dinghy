import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DUAL_IN_LINE_IC = {
  _style: {
    entity:
      'shadow=0;dashed=0;align=center;html=1;strokeWidth=1;shape=mxgraph.electrical.logic_gates.dual_inline_ic;labelNames=a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 200,
}

export function DualInLineIc(props: DiagramNodeProps) {
  return (
    <Shape
      {...DUAL_IN_LINE_IC}
      {...props}
      _style={extendStyle(DUAL_IN_LINE_IC, props)}
    />
  )
}
