import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_NORTH = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.arrow_north;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 83,
  _original_height: 98,
}

export function ArrowNorth(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROW_NORTH}
      {...props}
      _style={extendStyle(ARROW_NORTH, props)}
    />
  )
}
