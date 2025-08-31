import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.interaction;',
  },
  _width: 40,
  _height: 40,
}

export function Interaction(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERACTION}
      {...props}
      _style={extendStyle(INTERACTION, props)}
    />
  )
}
