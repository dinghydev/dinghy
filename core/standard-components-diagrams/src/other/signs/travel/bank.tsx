import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BANK = {
  _style:
    'shape=mxgraph.signs.travel.bank;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 86,
}

export function Bank(props: DiagramNodeProps) {
  return <Shape {...BANK} {...props} _style={extendStyle(BANK, props)} />
}
