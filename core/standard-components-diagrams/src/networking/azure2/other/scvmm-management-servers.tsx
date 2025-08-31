import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCVMM_MANAGEMENT_SERVERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/SCVMM_Management_Servers.svg;strokeColor=none;',
  _width: 68,
  _height: 67.72,
}

export function ScvmmManagementServers(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCVMM_MANAGEMENT_SERVERS}
      {...props}
      _style={extendStyle(SCVMM_MANAGEMENT_SERVERS, props)}
    />
  )
}
