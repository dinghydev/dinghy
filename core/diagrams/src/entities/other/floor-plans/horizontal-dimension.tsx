import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_DIMENSION = {
  _style: {
    entity:
      'shape=dimension;whiteSpace=wrap;html=1;align=center;points=[];verticalAlign=bottom;spacingBottom=3;labelBackgroundColor=none;',
  },
  _width: 100,
  _height: 40,
}

export function HorizontalDimension(props: NodeProps) {
  return (
    <Shape
      {...HORIZONTAL_DIMENSION}
      {...props}
      _style={extendStyle(HORIZONTAL_DIMENSION, props)}
    />
  )
}
