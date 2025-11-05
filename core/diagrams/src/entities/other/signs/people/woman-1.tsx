import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WOMAN_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.woman_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 48,
  _height: 100,
}

export function Woman1(props: NodeProps) {
  return <Shape {...WOMAN_1} {...props} _style={extendStyle(WOMAN_1, props)} />
}
