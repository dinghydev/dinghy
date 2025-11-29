import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRAPEZOID = {
  _style: {
    entity:
      'shape=trapezoid;perimeter=trapezoidPerimeter;whiteSpace=wrap;html=1;fixedSize=1;',
  },
  _width: 120,
  _height: 60,
}

export function Trapezoid(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRAPEZOID)} />
}
