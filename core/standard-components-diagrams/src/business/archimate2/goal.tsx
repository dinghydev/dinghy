import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOAL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ccccff;shape=mxgraph.archimate.motiv;motivType=goal',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Goal(props: DiagramNodeProps) {
  return <Shape {...GOAL} {...props} _style={extendStyle(GOAL, props)} />
}
