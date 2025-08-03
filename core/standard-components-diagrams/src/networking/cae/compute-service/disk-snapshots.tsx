import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISK_SNAPSHOTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/MD_snapshot.svg;strokeColor=none;',
  _width: 50,
  _height: 42,
}

export function DiskSnapshots(props: DiagramNodeProps) {
  return <Shape {...DISK_SNAPSHOTS} {...props} />
}
