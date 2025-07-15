import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TP_MCU = {
  _style:
    'shape=mxgraph.cisco.misc.tp_mcu;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 72,
  _height: 86,
}

export function TpMcu(props: DiagramNodeProps) {
  return <Shape {...TP_MCU} {...props} />
}
