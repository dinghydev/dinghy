import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRINCIPLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ccccff;shape=mxgraph.archimate.motiv;motivType=princ',
  },
  _width: 100,
  _height: 75,
}

export function Principle(props: NodeProps) {
  return (
    <Shape {...PRINCIPLE} {...props} _style={extendStyle(PRINCIPLE, props)} />
  )
}
