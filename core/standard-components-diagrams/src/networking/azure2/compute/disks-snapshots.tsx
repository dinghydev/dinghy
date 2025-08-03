import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISKS_SNAPSHOTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Disks_Snapshots.svg;strokeColor=none;',
  _width: 68,
  _height: 71,
}

export function DisksSnapshots(props: DiagramNodeProps) {
  return <Shape {...DISKS_SNAPSHOTS} {...props} />
}
