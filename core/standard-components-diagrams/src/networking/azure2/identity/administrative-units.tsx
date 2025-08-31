import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADMINISTRATIVE_UNITS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Administrative_Units.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AdministrativeUnits(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADMINISTRATIVE_UNITS}
      {...props}
      _style={extendStyle(ADMINISTRATIVE_UNITS, props)}
    />
  )
}
