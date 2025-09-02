import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRONT_DOORS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Front_Doors.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 44,
}

export function FrontDoors(props: DiagramNodeProps) {
  return (
    <Shape
      {...FRONT_DOORS}
      {...props}
      _style={extendStyle(FRONT_DOORS, props)}
    />
  )
}
