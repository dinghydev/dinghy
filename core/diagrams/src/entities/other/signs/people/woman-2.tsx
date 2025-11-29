import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WOMAN_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.woman_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 45,
  _height: 99,
}

export function Woman2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WOMAN_2)} />
}
