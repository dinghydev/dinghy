import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRINCIPLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ccccff;shape=mxgraph.archimate.motiv;motivType=princ',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Principle(props: DiagramNodeProps) {
  return (
    <Shape {...PRINCIPLE} {...props} _style={extendStyle(PRINCIPLE, props)} />
  )
}
