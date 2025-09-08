import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARROW_SW = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.arrow_sw;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function ArrowSw(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_SW} {...props} _style={extendStyle(ARROW_SW, props)} />
  )
}
