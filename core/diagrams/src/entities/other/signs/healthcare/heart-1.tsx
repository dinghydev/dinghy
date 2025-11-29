import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEART_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.heart_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 103,
  _height: 94,
}

export function Heart1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HEART_1)} />
}
