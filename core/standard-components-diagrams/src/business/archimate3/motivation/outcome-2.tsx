import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OUTCOME_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.outcome;strokeWidth=2;',
  _width: 60,
  _height: 60,
}

export function Outcome2(props: DiagramNodeProps) {
  return (
    <Shape {...OUTCOME_2} {...props} _style={extendStyle(OUTCOME_2, props)} />
  )
}
