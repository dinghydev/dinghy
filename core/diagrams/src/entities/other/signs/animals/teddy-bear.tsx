import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEDDY_BEAR = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.teddy_bear;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 69,
  _height: 99,
}

export function TeddyBear(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TEDDY_BEAR)} />
}
