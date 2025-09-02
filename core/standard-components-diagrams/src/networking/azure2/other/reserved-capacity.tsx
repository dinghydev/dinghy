import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESERVED_CAPACITY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Reserved_Capacity.svg;strokeColor=none;',
  },
  _original_width: 57.99999999999999,
  _original_height: 68,
}

export function ReservedCapacity(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESERVED_CAPACITY}
      {...props}
      _style={extendStyle(RESERVED_CAPACITY, props)}
    />
  )
}
