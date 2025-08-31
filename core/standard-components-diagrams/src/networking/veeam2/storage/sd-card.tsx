import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SD_CARD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.sd_card;',
  },
  _width: 23,
  _height: 28.000000000000004,
}

export function SdCard(props: DiagramNodeProps) {
  return <Shape {...SD_CARD} {...props} _style={extendStyle(SD_CARD, props)} />
}
