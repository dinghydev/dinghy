import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_DIMENSION = {
  _style: {
    entity:
      'shape=dimension;direction=north;whiteSpace=wrap;html=1;align=center;points=[];verticalAlign=bottom;labelBackgroundColor=none;horizontal=0;spacingBottom=3;',
  },
  _width: 40,
  _height: 100,
}

export function VerticalDimension(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_DIMENSION)} />
}
