import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_10 = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;fontColor=#000000;fontSize=24;fontStyle=0;verticalAlign=top;spacingBottom=0;spacingLeft=16;spacingTop=15;align=left;',
  },
  _original_width: 300,
  _original_height: 224,
}

export function Card10(props: DiagramNodeProps) {
  return <Shape {...CARD_10} {...props} _style={extendStyle(CARD_10, props)} />
}
