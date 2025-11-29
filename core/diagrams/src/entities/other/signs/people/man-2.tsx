import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAN_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.man_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 36,
  _height: 99,
}

export function Man2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MAN_2)} />
}
