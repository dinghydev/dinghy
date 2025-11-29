import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISKS_SNAPSHOTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Disks_Snapshots.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 71,
}

export function DisksSnapshots(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DISKS_SNAPSHOTS)} />
}
