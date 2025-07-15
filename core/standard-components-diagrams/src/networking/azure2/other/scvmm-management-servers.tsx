import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCVMM_MANAGEMENT_SERVERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/SCVMM_Management_Servers.svg;',
  _width: 68,
  _height: 67.72,
}

export function ScvmmManagementServers(props: DiagramNodeProps) {
  return <Shape {...SCVMM_MANAGEMENT_SERVERS} {...props} />
}
