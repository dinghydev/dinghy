import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATACENTER_SERVER_RACK = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/storage/Datacenter_Server_Rack.svg;strokeColor=none;',
  _width: 88.2,
  _height: 178.8,
}

export function DatacenterServerRack(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATACENTER_SERVER_RACK}
      {...props}
      _style={extendStyle(DATACENTER_SERVER_RACK, props)}
    />
  )
}
