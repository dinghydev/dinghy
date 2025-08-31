import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESERVATIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Reservations.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
