import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ITEM_FLOW_7 = {
  _style: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  _width: 3,
  _height: 370,
}

export function ItemFlow7(props: DiagramNodeProps) {
  return <Shape {...ITEM_FLOW_7} {...props} />
}
