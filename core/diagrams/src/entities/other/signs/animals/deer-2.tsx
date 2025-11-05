import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEER_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.deer_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 97,
  _original_height: 97,
}

export function Deer2(props: NodeProps) {
  return <Shape {...DEER_2} {...props} _style={extendStyle(DEER_2, props)} />
}
