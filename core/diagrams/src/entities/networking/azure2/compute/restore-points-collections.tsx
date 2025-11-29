import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESTORE_POINTS_COLLECTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Restore_Points_Collections.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 56.00000000000001,
}

export function RestorePointsCollections(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, RESTORE_POINTS_COLLECTIONS)} />
  )
}
