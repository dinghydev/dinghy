import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SATURN = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.saturn;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 99,
}

export function Saturn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SATURN)} />
}
