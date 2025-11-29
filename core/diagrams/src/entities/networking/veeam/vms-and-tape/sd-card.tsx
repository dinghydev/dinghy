import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SD_CARD = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.sd_card;',
  },
  _width: 32.4,
  _height: 38.8,
}

export function SdCard(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SD_CARD)} />
}
