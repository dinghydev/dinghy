import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISK_ENCRYPTION_SETS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Disk_Encryption_Sets.svg;',
  _width: 68,
  _height: 68,
}

export function DiskEncryptionSets(props: DiagramNodeProps) {
  return <Shape {...DISK_ENCRYPTION_SETS} {...props} />
}
