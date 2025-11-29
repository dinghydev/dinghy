import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WASHING_MACHINE = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.washing_machine;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 75,
  _height: 98,
}

export function WashingMachine(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WASHING_MACHINE)} />
}
