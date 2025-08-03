import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESTORE_POINTS_COLLECTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Restore_Points_Collections.svg;strokeColor=none;',
  _width: 68,
  _height: 56.00000000000001,
}

export function RestorePointsCollections(props: DiagramNodeProps) {
  return <Shape {...RESTORE_POINTS_COLLECTIONS} {...props} />
}
