import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK_CARD = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.network_card;',
  },
  _original_width: 42.8,
  _original_height: 30,
}

export function NetworkCard(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORK_CARD}
      {...props}
      _style={extendStyle(NETWORK_CARD, props)}
    />
  )
}
