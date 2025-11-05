import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FRONT_DOORS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Front_Doors.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function FrontDoors(props: NodeProps) {
  return (
    <Shape
      {...FRONT_DOORS}
      {...props}
      _style={extendStyle(FRONT_DOORS, props)}
    />
  )
}
