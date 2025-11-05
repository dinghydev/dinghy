import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_DIMENSION_2 = {
  _style: {
    entity:
      'shape=dimension;direction=south;whiteSpace=wrap;html=1;align=center;points=[];verticalAlign=top;labelBackgroundColor=none;horizontal=0;spacingTop=-15;',
  },
  _width: 40,
  _height: 100,
}

export function VerticalDimension2(props: NodeProps) {
  return (
    <Shape
      {...VERTICAL_DIMENSION_2}
      {...props}
      _style={extendStyle(VERTICAL_DIMENSION_2, props)}
    />
  )
}
