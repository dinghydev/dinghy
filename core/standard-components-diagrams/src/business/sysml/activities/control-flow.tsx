import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROL_FLOW = {
  _style: {
    entity: 'shape=rect;html=1;rounded=1;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 60,
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
