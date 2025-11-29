import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INFORMATION_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.information_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 59,
  _height: 98,
}

export function Information2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INFORMATION_2)} />
}
