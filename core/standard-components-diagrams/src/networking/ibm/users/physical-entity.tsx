import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHYSICAL_ENTITY = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/users/physical_entity.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function PhysicalEntity(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHYSICAL_ENTITY}
      {...props}
      _style={extendStyle(PHYSICAL_ENTITY, props)}
    />
  )
}
