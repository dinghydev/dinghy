import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISK_POOL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Disk_Pool.svg;strokeColor=none;',
  _width: 68,
  _height: 66,
}

export function DiskPool(props: DiagramNodeProps) {
  return <Shape {...DISK_POOL} {...props} />
}
