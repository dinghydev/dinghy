import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESTORE_POINTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Restore_Points.svg;',
  _width: 68,
  _height: 66.8,
}

export function RestorePoints(props: DiagramNodeProps) {
  return <Shape {...RESTORE_POINTS} {...props} />
}
