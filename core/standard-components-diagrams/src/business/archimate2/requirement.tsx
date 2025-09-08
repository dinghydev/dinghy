import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REQUIREMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ccccff;shape=mxgraph.archimate.motiv;motivType=req',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Requirement(props: DiagramNodeProps) {
  return (
    <Shape
      {...REQUIREMENT}
      {...props}
      _style={extendStyle(REQUIREMENT, props)}
    />
  )
}
