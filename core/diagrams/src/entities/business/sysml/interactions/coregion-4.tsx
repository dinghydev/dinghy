import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COREGION_4 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;dashed=1;endArrow=none;startArrow=open;verticalAlign=bottom;startSize=12;rounded=0;',
  },
  _width: 7,
  _height: 220,
}

export function Coregion4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COREGION_4)} />
}
