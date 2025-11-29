import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTENSION = {
  _style: {
    entity:
      'endArrow=block;html=1;endFill=1;edgeStyle=none;endSize=12;labelBackgroundColor=none;align=left;',
  },
  _width: 2,
  _height: 180,
}

export function Extension(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EXTENSION)} />
}
