import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWIMMING_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.swimming_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 45,
}

export function Swimming2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SWIMMING_2)} />
}
