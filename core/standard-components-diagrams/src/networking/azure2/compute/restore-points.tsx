import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESTORE_POINTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Restore_Points.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66.8,
}

export function RestorePoints(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESTORE_POINTS}
      {...props}
      _style={extendStyle(RESTORE_POINTS, props)}
    />
  )
}
