import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=card;whiteSpace=wrap;size=20;arcSize=12;',
  _width: 100,
  _height: 60,
}

export function Card(props: DiagramNodeProps) {
  return <Shape {...CARD} {...props} _style={extendStyle(CARD, props)} />
}
