import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATACENTER_SERVER_RACK_EOR = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/storage/Datacenter_Server_Rack_EoR.svg;',
  _width: 85.8,
  _height: 173.4,
}

export function DatacenterServerRackEor(props: DiagramNodeProps) {
  return <Shape {...DATACENTER_SERVER_RACK_EOR} {...props} />
}
