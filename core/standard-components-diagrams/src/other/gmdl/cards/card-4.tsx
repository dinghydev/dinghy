import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_4 = {
  _style: {
    entity: 'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;',
  },
  _original_width: 344,
  _original_height: 420,
}

export function Card4(props: DiagramNodeProps) {
  return <Shape {...CARD_4} {...props} _style={extendStyle(CARD_4, props)} />
}
