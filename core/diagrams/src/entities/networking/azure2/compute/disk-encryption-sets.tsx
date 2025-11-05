import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISK_ENCRYPTION_SETS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Disk_Encryption_Sets.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DiskEncryptionSets(props: NodeProps) {
  return (
    <Shape
      {...DISK_ENCRYPTION_SETS}
      {...props}
      _style={extendStyle(DISK_ENCRYPTION_SETS, props)}
    />
  )
}
