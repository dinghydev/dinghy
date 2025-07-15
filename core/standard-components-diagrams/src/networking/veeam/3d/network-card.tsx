import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_CARD = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.network_card;',
  _width: 38,
  _height: 40,
}

export function NetworkCard(props: DiagramNodeProps) {
  return <Shape {...NETWORK_CARD} {...props} />
}
