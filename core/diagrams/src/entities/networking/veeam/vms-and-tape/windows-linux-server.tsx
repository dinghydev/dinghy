import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WINDOWS_LINUX_SERVER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.windows_linux_server;',
  },
  _original_width: 76,
  _original_height: 72,
}

export function WindowsLinuxServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS_LINUX_SERVER}
      {...props}
      _style={extendStyle(WINDOWS_LINUX_SERVER, props)}
    />
  )
}
