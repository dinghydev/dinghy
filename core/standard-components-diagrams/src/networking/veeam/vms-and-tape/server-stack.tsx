import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_STACK = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.server_stack;',
  },
  _original_width: 57.2,
  _original_height: 49.6,
}

export function ServerStack(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_STACK}
      {...props}
      _style={extendStyle(SERVER_STACK, props)}
    />
  )
}
