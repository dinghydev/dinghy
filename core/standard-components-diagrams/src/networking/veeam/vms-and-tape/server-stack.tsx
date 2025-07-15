import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_STACK = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.server_stack;',
  _width: 57.2,
  _height: 49.6,
}

export function ServerStack(props: DiagramNodeProps) {
  return <Shape {...SERVER_STACK} {...props} />
}
