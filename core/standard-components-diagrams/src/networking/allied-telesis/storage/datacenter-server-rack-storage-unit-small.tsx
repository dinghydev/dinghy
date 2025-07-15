import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATACENTER_SERVER_RACK_STORAGE_UNIT_SMALL = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/storage/Datacenter_Server_Rack_Storage_Unit_Small.svg;',
  _width: 77.4,
  _height: 67.2,
}

export function DatacenterServerRackStorageUnitSmall(props: DiagramNodeProps) {
  return <Shape {...DATACENTER_SERVER_RACK_STORAGE_UNIT_SMALL} {...props} />
}
