import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISK_ENCRYPTION_SETS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Disk_Encryption_Sets.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DiskEncryptionSets(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISK_ENCRYPTION_SETS}
      {...props}
      _style={extendStyle(DISK_ENCRYPTION_SETS, props)}
    />
  )
}
