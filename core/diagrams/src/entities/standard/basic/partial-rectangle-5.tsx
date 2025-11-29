import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTIAL_RECTANGLE_5 = {
  _style: {
    entity:
      'shape=partialRectangle;whiteSpace=wrap;html=1;top=0;left=0;fillColor=none;',
  },
  _width: 120,
  _height: 60,
}

export function PartialRectangle5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PARTIAL_RECTANGLE_5)} />
}
