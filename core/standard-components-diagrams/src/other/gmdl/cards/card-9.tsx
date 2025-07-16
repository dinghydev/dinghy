import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD_9 = {
  _style:
    'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;fontColor=#000000;fontSize=24;fontStyle=0;verticalAlign=top;spacingBottom=0;spacingLeft=16;spacingTop=15;align=left;whiteSpace=wrap;html=1;',
  _width: 342,
  _height: 146,
}

export function Card9(props: DiagramNodeProps) {
  return <Shape {...CARD_9} {...props} />
}
