import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORAGE_SYNC_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Storage_Sync_Services.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 60,
}

export function StorageSyncServices(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STORAGE_SYNC_SERVICES)} />
}
