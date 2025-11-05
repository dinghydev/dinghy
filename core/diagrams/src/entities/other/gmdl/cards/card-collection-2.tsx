import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_COLLECTION_2 = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ECECEC;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
}

export function CardCollection2(props: NodeProps) {
  return (
    <Shape
      {...CARD_COLLECTION_2}
      {...props}
      _style={extendStyle(CARD_COLLECTION_2, props)}
    />
  )
}
