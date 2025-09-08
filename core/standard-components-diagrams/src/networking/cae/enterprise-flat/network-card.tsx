import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETWORK_CARD = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.network_card',
  },
  _original_width: 50,
  _original_height: 35,
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
