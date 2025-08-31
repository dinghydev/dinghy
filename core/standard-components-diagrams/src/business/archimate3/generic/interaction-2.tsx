import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERACTION_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.interaction;',
  },
  _width: 45,
  _height: 45,
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
