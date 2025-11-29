import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CPU_SOCKET = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.cpu_socket;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function CpuSocket(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CPU_SOCKET)} />
}
