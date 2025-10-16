import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERACTION_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.interaction;',
  },
  _original_width: 45,
  _original_height: 45,
}

export function Interaction2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERACTION_2}
      {...props}
      _style={extendStyle(INTERACTION_2, props)}
    />
  )
}
