import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAS_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.gas_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 97,
  _original_height: 98,
}

export function Gas3(props: DiagramNodeProps) {
  return <Shape {...GAS_3} {...props} _style={extendStyle(GAS_3, props)} />
}
