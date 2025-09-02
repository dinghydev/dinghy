import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FALLING_ROCKS = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.falling_rocks;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 99,
}

export function FallingRocks(props: DiagramNodeProps) {
  return (
    <Shape
      {...FALLING_ROCKS}
      {...props}
      _style={extendStyle(FALLING_ROCKS, props)}
    />
  )
}
