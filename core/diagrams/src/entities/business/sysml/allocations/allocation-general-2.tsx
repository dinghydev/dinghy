import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALLOCATION_GENERAL_2 = {
  _style: {
    entity:
      'rounded=0;html=1;verticalAlign=top;labelBackgroundColor=none;endArrow=open;dashed=1;endSize=12;',
  },
  _width: 2,
  _height: 60,
}

export function AllocationGeneral2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALLOCATION_GENERAL_2}
      {...props}
      _style={extendStyle(ALLOCATION_GENERAL_2, props)}
    />
  )
}
