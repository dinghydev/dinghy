import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ADMINISTRATIVE_UNITS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Administrative_Units.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function AdministrativeUnits(props: DiagramNodeProps) {
  return <Shape {...ADMINISTRATIVE_UNITS} {...props} />
}
