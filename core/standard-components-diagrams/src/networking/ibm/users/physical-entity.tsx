import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHYSICAL_ENTITY = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/users/physical_entity.svg;',
  _width: 60,
  _height: 60,
}

export function PhysicalEntity(props: DiagramNodeProps) {
  return <Shape {...PHYSICAL_ENTITY} {...props} />
}
