import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESTORE_POINTS_COLLECTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Restore_Points_Collections.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 56.00000000000001,
}

export function RestorePointsCollections(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESTORE_POINTS_COLLECTIONS}
      {...props}
      _style={extendStyle(RESTORE_POINTS_COLLECTIONS, props)}
    />
  )
}
