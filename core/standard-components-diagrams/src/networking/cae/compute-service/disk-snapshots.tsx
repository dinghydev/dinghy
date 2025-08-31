import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISK_SNAPSHOTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/MD_snapshot.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 42,
}

export function DiskSnapshots(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISK_SNAPSHOTS}
      {...props}
      _style={extendStyle(DISK_SNAPSHOTS, props)}
    />
  )
}
