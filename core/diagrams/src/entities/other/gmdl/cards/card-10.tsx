import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_10 = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;fontColor=#000000;fontSize=24;fontStyle=0;verticalAlign=top;spacingBottom=0;spacingLeft=16;spacingTop=15;align=left;',
  },
  _width: 300,
  _height: 224,
}

export function Card10(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CARD_10)} />
}
