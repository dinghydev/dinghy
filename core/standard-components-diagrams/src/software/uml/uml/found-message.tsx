import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FOUND_MESSAGE = {
  _style: {
    entity:
      'html=1;points=[[0,0,0,0,5],[0,1,0,0,-5],[1,0,0,0,5],[1,1,0,0,-5]];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&#34;curved&#34;:0,&#34;rounded&#34;:0};',
  },
  _width: 0,
  _height: 80,
}

export function FoundMessage(props: DiagramNodeProps) {
  return (
    <Shape
      {...FOUND_MESSAGE}
      {...props}
      _style={extendStyle(FOUND_MESSAGE, props)}
    />
  )
}
