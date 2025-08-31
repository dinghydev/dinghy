import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_SYNC_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Storage_Sync_Services.svg;strokeColor=none;',
  },
  _width: 72,
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
