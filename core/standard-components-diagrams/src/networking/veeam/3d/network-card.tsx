import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETWORK_CARD = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.network_card;',
  },
  _original_width: 38,
  _original_height: 40,
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
