import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_COLLECTION = {
  _style: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
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
