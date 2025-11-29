import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTIAL_RECTANGLE_2 = {
  _style: {
    entity:
      'shape=partialRectangle;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=none;',
  },
  _width: 120,
  _height: 60,
}

export function PartialRectangle2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PARTIAL_RECTANGLE_2)} />
}
