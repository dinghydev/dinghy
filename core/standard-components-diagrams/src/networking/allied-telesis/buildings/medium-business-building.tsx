import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEDIUM_BUSINESS_BUILDING = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Medium_Business_Building.svg;strokeColor=none;',
  _width: 54.6,
  _height: 70.19999999999999,
}

export function MediumBusinessBuilding(props: DiagramNodeProps) {
  return <Shape {...MEDIUM_BUSINESS_BUILDING} {...props} />
}
