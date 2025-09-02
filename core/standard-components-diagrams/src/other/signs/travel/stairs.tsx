import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STAIRS = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.stairs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 83,
}

export function Stairs(props: DiagramNodeProps) {
  return <Shape {...STAIRS} {...props} _style={extendStyle(STAIRS, props)} />
}
