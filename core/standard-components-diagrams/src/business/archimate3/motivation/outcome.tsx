import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OUTCOME = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=outcome;archiType=oct;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Outcome(props: DiagramNodeProps) {
  return <Shape {...OUTCOME} {...props} _style={extendStyle(OUTCOME, props)} />
}
