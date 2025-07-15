import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOWS_LINUX_SERVER = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.windows_linux_server;',
  _width: 76,
  _height: 72,
}

export function WindowsLinuxServer(props: DiagramNodeProps) {
  return <Shape {...WINDOWS_LINUX_SERVER} {...props} />
}
