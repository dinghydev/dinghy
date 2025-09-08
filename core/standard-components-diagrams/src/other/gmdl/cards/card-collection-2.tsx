import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CARD_COLLECTION_2 = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ECECEC;strokeColor=none;',
  },
  _original_width: 358,
  _original_height: 642,
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
