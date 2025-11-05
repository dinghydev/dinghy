import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GOAL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ccccff;shape=mxgraph.archimate.motiv;motivType=goal',
  },
  _width: 100,
  _height: 75,
}

export function Goal(props: NodeProps) {
  return <Shape {...GOAL} {...props} _style={extendStyle(GOAL, props)} />
}
