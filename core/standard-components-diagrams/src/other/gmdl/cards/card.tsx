import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD = {
  _style: 'shape=rect;fillColor=#ffffff;strokeColor=none;shadow=1;',
  _width: 342,
  _height: 356,
}

export function Card(props: DiagramNodeProps) {
  return <Shape {...CARD} {...props} _style={extendStyle(CARD, props)} />
}
