import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_STACK = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.server_stack;',
  _width: 40,
  _height: 40,
}

export function ServerStack(props: DiagramNodeProps) {
  return <Shape {...SERVER_STACK} {...props} />
}
