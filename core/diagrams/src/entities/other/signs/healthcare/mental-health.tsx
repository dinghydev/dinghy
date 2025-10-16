import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MENTAL_HEALTH = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.mental_health;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 84,
  _original_height: 98,
}

export function MentalHealth(props: DiagramNodeProps) {
  return (
    <Shape
      {...MENTAL_HEALTH}
      {...props}
      _style={extendStyle(MENTAL_HEALTH, props)}
    />
  )
}
