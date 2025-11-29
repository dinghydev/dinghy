import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUM = {
  _style: {
    entity:
      'shape=sumEllipse;perimeter=ellipsePerimeter;whiteSpace=wrap;html=1;backgroundOutline=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Sum(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUM)} />
}
