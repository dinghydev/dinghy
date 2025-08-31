import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AVAILABILITY_SETS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Availability_Sets.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AvailabilitySets(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVAILABILITY_SETS}
      {...props}
      _style={extendStyle(AVAILABILITY_SETS, props)}
    />
  )
}
