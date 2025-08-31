import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_ZFS_STORAGE_7320 = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sun_zfs_storage_7320;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 60,
}

export function SunZfsStorage7320(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUN_ZFS_STORAGE_7320}
      {...props}
      _style={extendStyle(SUN_ZFS_STORAGE_7320, props)}
    />
  )
}
