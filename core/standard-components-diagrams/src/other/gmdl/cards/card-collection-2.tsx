import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD_COLLECTION_2 = {
  _style: 'dashed=0;shape=rect;fillColor=#ECECEC;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function CardCollection2(props: DiagramNodeProps) {
  return <Shape {...CARD_COLLECTION_2} {...props} />
}
