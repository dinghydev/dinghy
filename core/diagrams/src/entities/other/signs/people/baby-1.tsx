import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BABY_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.baby_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 76,
  _height: 102,
}

export function Baby1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BABY_1)} />
}
