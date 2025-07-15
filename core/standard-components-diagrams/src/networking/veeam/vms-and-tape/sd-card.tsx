import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SD_CARD = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.sd_card;',
  _width: 32.4,
  _height: 38.8,
}

export function SdCard(props: DiagramNodeProps) {
  return <Shape {...SD_CARD} {...props} />
}
