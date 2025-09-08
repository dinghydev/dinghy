import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTROL_FLOW = {
  _style: {
    entity: 'shape=rect;html=1;rounded=1;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function ControlFlow(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTROL_FLOW}
      {...props}
      _style={extendStyle(CONTROL_FLOW, props)}
    />
  )
}
