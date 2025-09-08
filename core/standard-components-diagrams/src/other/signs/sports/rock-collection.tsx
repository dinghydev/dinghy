import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROCK_COLLECTION = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.rock_collection;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 92,
  _original_height: 98,
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
