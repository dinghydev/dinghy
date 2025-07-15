import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESOURCE_MOVER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Resource_Mover.svg;',
  _width: 56.00000000000001,
  _height: 68,
}

export function ResourceMover(props: DiagramNodeProps) {
  return <Shape {...RESOURCE_MOVER} {...props} />
}
