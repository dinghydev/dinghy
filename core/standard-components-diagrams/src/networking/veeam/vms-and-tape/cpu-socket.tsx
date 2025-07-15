import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CPU_SOCKET = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.cpu_socket;',
  _width: 44.8,
  _height: 44.8,
}

export function CpuSocket(props: DiagramNodeProps) {
  return <Shape {...CPU_SOCKET} {...props} />
}
