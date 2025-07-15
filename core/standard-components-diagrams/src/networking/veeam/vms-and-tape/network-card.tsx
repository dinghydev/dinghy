import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_CARD = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.network_card;',
  _width: 42.8,
  _height: 30,
}

export function NetworkCard(props: DiagramNodeProps) {
  return <Shape {...NETWORK_CARD} {...props} />
}
