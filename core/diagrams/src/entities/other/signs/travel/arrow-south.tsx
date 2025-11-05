import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_SOUTH = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.arrow_south;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 83,
  _original_height: 98,
}

export function ArrowSouth(props: NodeProps) {
  return (
    <Shape
      {...ARROW_SOUTH}
      {...props}
      _style={extendStyle(ARROW_SOUTH, props)}
    />
  )
}
