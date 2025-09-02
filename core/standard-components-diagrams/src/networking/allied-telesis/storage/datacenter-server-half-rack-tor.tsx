import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATACENTER_SERVER_HALF_RACK_TOR = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/storage/Datacenter_Server_Half_Rack_ToR.svg;strokeColor=none;',
  },
  _original_width: 88.2,
  _original_height: 114.6,
}

export function DatacenterServerHalfRackTor(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATACENTER_SERVER_HALF_RACK_TOR}
      {...props}
      _style={extendStyle(DATACENTER_SERVER_HALF_RACK_TOR, props)}
    />
  )
}
