import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_SYNC_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Storage_sync_service.svg;',
  _width: 50,
  _height: 50,
}

export function StorageSyncServices(props: DiagramNodeProps) {
  return <Shape {...STORAGE_SYNC_SERVICES} {...props} />
}
