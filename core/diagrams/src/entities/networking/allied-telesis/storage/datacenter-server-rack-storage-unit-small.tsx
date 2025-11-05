import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATACENTER_SERVER_RACK_STORAGE_UNIT_SMALL = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/storage/Datacenter_Server_Rack_Storage_Unit_Small.svg;strokeColor=none;',
  },
  _original_width: 77.4,
  _original_height: 67.2,
}

export function DatacenterServerRackStorageUnitSmall(props: NodeProps) {
  return (
    <Shape
      {...DATACENTER_SERVER_RACK_STORAGE_UNIT_SMALL}
      {...props}
      _style={extendStyle(DATACENTER_SERVER_RACK_STORAGE_UNIT_SMALL, props)}
    />
  )
}
