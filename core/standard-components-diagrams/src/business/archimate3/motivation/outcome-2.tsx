import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OUTCOME_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.outcome;strokeWidth=2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Outcome2(props: DiagramNodeProps) {
  return (
    <Shape {...OUTCOME_2} {...props} _style={extendStyle(OUTCOME_2, props)} />
  )
}
