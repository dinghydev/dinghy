import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCHOOL_BUILDING = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/School_Building.svg;strokeColor=none;',
  _width: 165,
  _height: 166.79999999999998,
}

export function SchoolBuilding(props: DiagramNodeProps) {
  return <Shape {...SCHOOL_BUILDING} {...props} />
}
