import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTIAL_RECTANGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.rect;fillColor2=none;strokeWidth=1;size=20;indent=5;',
  },
  _width: 120,
  _height: 60,
}

export function PartialRectangle(props: NodeProps) {
  return (
    <Shape
      {...PARTIAL_RECTANGLE}
      {...props}
      _style={extendStyle(PARTIAL_RECTANGLE, props)}
    />
  )
}
