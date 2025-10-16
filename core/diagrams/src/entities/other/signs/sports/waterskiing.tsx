import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WATERSKIING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.waterskiing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 98,
}

export function Waterskiing(props: DiagramNodeProps) {
  return (
    <Shape
      {...WATERSKIING}
      {...props}
      _style={extendStyle(WATERSKIING, props)}
    />
  )
}
