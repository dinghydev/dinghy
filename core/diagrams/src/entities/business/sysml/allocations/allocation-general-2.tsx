import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALLOCATION_GENERAL_2 = {
  _style: {
    entity:
      'rounded=0;html=1;verticalAlign=top;labelBackgroundColor=none;endArrow=open;dashed=1;endSize=12;',
  },
  _width: 2,
  _height: 60,
}

export function AllocationGeneral2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ALLOCATION_GENERAL_2)} />
}
