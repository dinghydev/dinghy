import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LARGE_BUILDING = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Large_Building.svg;',
  _width: 75,
  _height: 75,
}

export function LargeBuilding(props: DiagramNodeProps) {
  return <Shape {...LARGE_BUILDING} {...props} />
}
