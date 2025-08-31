import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_SYNC_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Storage_sync_service.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function StorageSyncServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_SYNC_SERVICES}
      {...props}
      _style={extendStyle(STORAGE_SYNC_SERVICES, props)}
    />
  )
}
