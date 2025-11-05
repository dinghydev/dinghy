import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REQUIRED_INTERFACE_2 = {
  _style: {
    entity:
      'rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=halfCircle;endFill=0;endSize=6;strokeWidth=1;sketch=0;fontSize=12;curved=1;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function RequiredInterface2(props: NodeProps) {
  return (
    <Shape
      {...REQUIRED_INTERFACE_2}
      {...props}
      _style={extendStyle(REQUIRED_INTERFACE_2, props)}
    />
  )
}
