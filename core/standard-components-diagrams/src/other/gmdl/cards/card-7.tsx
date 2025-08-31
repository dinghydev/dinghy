import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_7 = {
  _style:
    'shape=rect;fillColor=#BDBDBD;strokeColor=none;fontColor=#000000;fontSize=12;fontStyle=0;verticalAlign=middle;spacingBottom=0;spacingLeft=0;shadow=1;whiteSpace=wrap;html=1;',
  _width: 342,
  _height: 342,
}

export function Card7(props: DiagramNodeProps) {
  return <Shape {...CARD_7} {...props} _style={extendStyle(CARD_7, props)} />
}
