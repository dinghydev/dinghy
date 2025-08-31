import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOAL_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.goal;',
  },
  _width: 40,
  _height: 40,
}

export function Goal2(props: DiagramNodeProps) {
  return <Shape {...GOAL_2} {...props} _style={extendStyle(GOAL_2, props)} />
}
