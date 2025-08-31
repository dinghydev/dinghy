import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATACENTER_SERVER_RACK_TOR = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/storage/Datacenter_Server_Rack_ToR.svg;strokeColor=none;',
  _width: 88.2,
  _height: 178.8,
}

export function DatacenterServerRackTor(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATACENTER_SERVER_RACK_TOR}
      {...props}
      _style={extendStyle(DATACENTER_SERVER_RACK_TOR, props)}
    />
  )
}
