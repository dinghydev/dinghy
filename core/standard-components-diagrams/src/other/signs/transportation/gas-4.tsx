import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAS_4 = {
  _style:
    'shape=mxgraph.signs.transportation.gas_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 75,
  _height: 98,
}

export function Gas4(props: DiagramNodeProps) {
  return <Shape {...GAS_4} {...props} _style={extendStyle(GAS_4, props)} />
}
