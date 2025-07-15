import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_SYNC_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Storage_Sync_Services.svg;',
  _width: 72,
  _height: 60,
}

export function StorageSyncServices(props: DiagramNodeProps) {
  return <Shape {...STORAGE_SYNC_SERVICES} {...props} />
}
