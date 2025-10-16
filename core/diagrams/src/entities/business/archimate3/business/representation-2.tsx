import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REPRESENTATION_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.representation;',
  },
  _width: 70,
  _height: 40,
}

export function Representation2(props: DiagramNodeProps) {
  return (
    <Shape
      {...REPRESENTATION_2}
      {...props}
      _style={extendStyle(REPRESENTATION_2, props)}
    />
  )
}
