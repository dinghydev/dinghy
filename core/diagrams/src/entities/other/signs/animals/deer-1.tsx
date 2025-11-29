import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEER_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.deer_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 82,
  _original_height: 98,
}

export function Deer1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEER_1)} />
}
