import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_COLLECTION_2 = {
  _style: 'dashed=0;shape=rect;fillColor=#ECECEC;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function CardCollection2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CARD_COLLECTION_2}
      {...props}
      _style={extendStyle(CARD_COLLECTION_2, props)}
    />
  )
}
