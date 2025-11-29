import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERALIZATION = {
  _style: {
    entity:
      'endArrow=block;html=1;endFill=0;edgeStyle=none;endSize=12;labelBackgroundColor=none;align=left;',
  },
  _width: 2,
  _height: 180,
}

export function Generalization(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GENERALIZATION)} />
}
