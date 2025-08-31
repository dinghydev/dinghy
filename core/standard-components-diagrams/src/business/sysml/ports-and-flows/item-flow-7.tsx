import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ITEM_FLOW_7 = {
  _style: {
    entity:
      'shape=rect;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  },
  _width: 3,
  _height: 370,
}

export function ItemFlow7(props: DiagramNodeProps) {
  return (
    <Shape
      {...ITEM_FLOW_7}
      {...props}
      _style={extendStyle(ITEM_FLOW_7, props)}
    />
  )
}
