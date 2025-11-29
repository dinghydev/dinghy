import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EYE = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.eye;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 55,
}

export function Eye(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EYE)} />
}
