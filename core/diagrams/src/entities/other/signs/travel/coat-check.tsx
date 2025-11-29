import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COAT_CHECK = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.coat_check;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 100,
  _height: 71,
}

export function CoatCheck(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COAT_CHECK)} />
}
