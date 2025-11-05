import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUN_ZFS_STORAGE_7120 = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_zfs_storage_7120;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function SunZfsStorage7120(props: NodeProps) {
  return (
    <Shape
      {...SUN_ZFS_STORAGE_7120}
      {...props}
      _style={extendStyle(SUN_ZFS_STORAGE_7120, props)}
    />
  )
}
