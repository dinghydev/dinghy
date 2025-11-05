import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BABY_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.baby_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 77,
  _height: 99,
}

export function Baby2(props: NodeProps) {
  return <Shape {...BABY_2} {...props} _style={extendStyle(BABY_2, props)} />
}
