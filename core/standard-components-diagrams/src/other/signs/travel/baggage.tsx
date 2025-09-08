import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BAGGAGE = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.baggage;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 82,
}

export function Baggage(props: DiagramNodeProps) {
  return <Shape {...BAGGAGE} {...props} _style={extendStyle(BAGGAGE, props)} />
}
