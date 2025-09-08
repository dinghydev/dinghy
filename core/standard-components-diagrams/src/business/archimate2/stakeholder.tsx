import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STAKEHOLDER = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffccff;shape=mxgraph.archimate.motiv;motivType=stake',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Stakeholder(props: DiagramNodeProps) {
  return (
    <Shape
      {...STAKEHOLDER}
      {...props}
      _style={extendStyle(STAKEHOLDER, props)}
    />
  )
}
