import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATACENTER_SERVER_RACK_EOR = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/storage/Datacenter_Server_Rack_EoR.svg;strokeColor=none;',
  },
  _width: 85.8,
  _height: 173.4,
}

export function DatacenterServerRackEor(props: NodeProps) {
  return (
    <Shape
      {...DATACENTER_SERVER_RACK_EOR}
      {...props}
      _style={extendStyle(DATACENTER_SERVER_RACK_EOR, props)}
    />
  )
}
