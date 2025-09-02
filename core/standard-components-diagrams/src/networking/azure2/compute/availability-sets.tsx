import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AVAILABILITY_SETS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Availability_Sets.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
