import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_8 = {
  _style:
    'dashed=0;shape=rect;fillColor=#BDBDBD;strokeColor=none;fontColor=#FFFFFF;fontSize=22;fontStyle=0;verticalAlign=bottom;spacingBottom=48;spacingLeft=0;align=left;spacing=12;gradientColor=#606060;shadow=1;whiteSpace=wrap;html=1;',
  _width: 342,
  _height: 216,
}

export function Card8(props: DiagramNodeProps) {
  return <Shape {...CARD_8} {...props} _style={extendStyle(CARD_8, props)} />
}
