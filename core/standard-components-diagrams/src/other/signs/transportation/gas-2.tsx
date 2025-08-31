import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAS_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.gas_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 75,
  _height: 98,
}

export function Gas2(props: DiagramNodeProps) {
  return <Shape {...GAS_2} {...props} _style={extendStyle(GAS_2, props)} />
}
