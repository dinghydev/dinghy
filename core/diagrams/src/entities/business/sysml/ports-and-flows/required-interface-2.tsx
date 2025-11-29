import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REQUIRED_INTERFACE_2 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;align=left;verticalAlign=bottom;endArrow=sysMLReqInt;endSize=8;exitX=0;exitY=0.5;',
  },
  _width: 1,
  _height: 60,
}

export function RequiredInterface2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REQUIRED_INTERFACE_2)} />
}
