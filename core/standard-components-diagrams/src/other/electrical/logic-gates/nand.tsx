import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAND = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.logic_gate;operation=and;negating=1;negSize=0.15;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Nand(props: DiagramNodeProps) {
  return <Shape {...NAND} {...props} _style={extendStyle(NAND, props)} />
}
