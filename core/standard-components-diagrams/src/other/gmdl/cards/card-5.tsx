import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD_5 = {
  _style:
    'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;fontColor=#000000;fontSize=23;fontStyle=0;verticalAlign=top;spacingBottom=0;spacingLeft=16;spacingTop=20;align=left;whiteSpace=wrap;html=1;',
  _width: 342,
  _height: 334,
}

export function Card5(props: DiagramNodeProps) {
  return <Shape {...CARD_5} {...props} />
}
