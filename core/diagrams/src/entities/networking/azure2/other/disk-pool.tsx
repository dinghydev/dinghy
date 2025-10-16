import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISK_POOL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Disk_Pool.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66,
}

export function DiskPool(props: DiagramNodeProps) {
  return (
    <Shape {...DISK_POOL} {...props} _style={extendStyle(DISK_POOL, props)} />
  )
}
