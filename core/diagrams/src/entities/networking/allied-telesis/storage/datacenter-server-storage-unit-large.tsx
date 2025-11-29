import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATACENTER_SERVER_STORAGE_UNIT_LARGE = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/storage/Datacenter_Server_Storage_Unit_Large.svg;strokeColor=none;',
  },
  _original_width: 76.8,
  _original_height: 79.2,
}

export function DatacenterServerStorageUnitLarge(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DATACENTER_SERVER_STORAGE_UNIT_LARGE)}
    />
  )
}
