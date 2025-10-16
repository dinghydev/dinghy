import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESERVATIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Reservations.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Reservations(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESERVATIONS}
      {...props}
      _style={extendStyle(RESERVATIONS, props)}
    />
  )
}
