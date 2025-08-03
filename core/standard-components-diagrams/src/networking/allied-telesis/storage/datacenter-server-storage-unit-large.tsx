import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATACENTER_SERVER_STORAGE_UNIT_LARGE = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/storage/Datacenter_Server_Storage_Unit_Large.svg;strokeColor=none;',
  _width: 76.8,
  _height: 79.2,
}

export function DatacenterServerStorageUnitLarge(props: DiagramNodeProps) {
  return <Shape {...DATACENTER_SERVER_STORAGE_UNIT_LARGE} {...props} />
}
