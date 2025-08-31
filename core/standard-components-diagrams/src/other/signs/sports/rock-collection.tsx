import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROCK_COLLECTION = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.rock_collection;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 92,
  _height: 98,
}

export function RockCollection(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROCK_COLLECTION}
      {...props}
      _style={extendStyle(ROCK_COLLECTION, props)}
    />
  )
}
