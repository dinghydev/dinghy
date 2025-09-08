import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ESCALATOR = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.escalator;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 77,
}

export function Escalator(props: DiagramNodeProps) {
  return (
    <Shape {...ESCALATOR} {...props} _style={extendStyle(ESCALATOR, props)} />
  )
}
