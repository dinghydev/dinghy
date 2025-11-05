import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_7 = {
  _style: {
    entity:
      'shape=rect;fillColor=#BDBDBD;strokeColor=none;fontColor=#000000;fontSize=12;fontStyle=0;verticalAlign=middle;spacingBottom=0;spacingLeft=0;shadow=1;whiteSpace=wrap;html=1;',
  },
  _original_width: 342,
  _original_height: 342,
}

export function Card7(props: NodeProps) {
  return <Shape {...CARD_7} {...props} _style={extendStyle(CARD_7, props)} />
}
