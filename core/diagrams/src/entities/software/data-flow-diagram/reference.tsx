import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REFERENCE = {
  _style: {
    entity:
      'shape=ellipse;html=1;dashed=0;whiteSpace=wrap;aspect=fixed;perimeter=ellipsePerimeter;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function Reference(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REFERENCE)} />
}
