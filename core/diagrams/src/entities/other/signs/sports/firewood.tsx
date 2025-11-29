import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIREWOOD = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.firewood;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 101,
  _height: 90,
}

export function Firewood(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIREWOOD)} />
}
