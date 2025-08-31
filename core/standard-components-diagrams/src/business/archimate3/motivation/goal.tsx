import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOAL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=goal;archiType=oct;',
  },
  _width: 150,
  _height: 75,
}

export function Goal(props: DiagramNodeProps) {
  return <Shape {...GOAL} {...props} _style={extendStyle(GOAL, props)} />
}
