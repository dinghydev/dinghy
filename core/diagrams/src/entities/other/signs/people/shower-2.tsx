import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHOWER_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.shower_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 92,
}

export function Shower2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SHOWER_2)} />
}
