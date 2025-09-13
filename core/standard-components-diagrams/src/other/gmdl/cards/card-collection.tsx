import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CARD_COLLECTION = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
}

export function CardCollection(props: DiagramNodeProps) {
  return (
    <Shape
      {...CARD_COLLECTION}
      {...props}
      _style={extendStyle(CARD_COLLECTION, props)}
    />
  )
}
