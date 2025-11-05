import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISK_SNAPSHOTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/MD_snapshot.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function DiskSnapshots(props: NodeProps) {
  return (
    <Shape
      {...DISK_SNAPSHOTS}
      {...props}
      _style={extendStyle(DISK_SNAPSHOTS, props)}
    />
  )
}
