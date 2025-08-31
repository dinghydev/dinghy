import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK_CARD = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.network_card;',
  _width: 38,
  _height: 27,
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
