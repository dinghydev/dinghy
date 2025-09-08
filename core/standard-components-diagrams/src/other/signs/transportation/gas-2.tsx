import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GAS_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.gas_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 75,
  _original_height: 98,
}

export function Gas2(props: DiagramNodeProps) {
  return <Shape {...GAS_2} {...props} _style={extendStyle(GAS_2, props)} />
}
