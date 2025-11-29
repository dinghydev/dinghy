import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STOP_STATE = {
  _style: {
    entity:
      'shape=ellipse;html=1;dashed=0;whiteSpace=wrap;aspect=fixed;strokeWidth=5;perimeter=ellipsePerimeter;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function StopState(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STOP_STATE)} />
}
