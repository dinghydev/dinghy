import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_2 = {
  _style: {
    entity: 'shape=rect;fillColor=#BDBDBD;strokeColor=#BDBDBD;shadow=1;',
  },
  _width: 0,
  _height: 230,
}

export function Card2(props: DiagramNodeProps) {
  return <Shape {...CARD_2} {...props} _style={extendStyle(CARD_2, props)} />
}
