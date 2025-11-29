import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_DIMENSION_2 = {
  _style: {
    entity:
      'shape=dimension;direction=west;whiteSpace=wrap;html=1;align=center;points=[];verticalAlign=top;spacingTop=-15;labelBackgroundColor=none;',
  },
  _width: 100,
  _height: 40,
}

export function HorizontalDimension2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, HORIZONTAL_DIMENSION_2)} />
  )
}
