import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRANSFER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;strokeWidth=2;shape=mxgraph.arrows2.arrow;dy=0.6;dx=40;notch=0;',
  },
  _width: 100,
  _height: 70,
}

export function Transfer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRANSFER)} />
}
