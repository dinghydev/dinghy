import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PC_ADAPTER_CARD = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.pc_adapter_card;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 64,
  _height: 86,
}

export function PcAdapterCard(props: DiagramNodeProps) {
  return (
    <Shape
      {...PC_ADAPTER_CARD}
      {...props}
      _style={extendStyle(PC_ADAPTER_CARD, props)}
    />
  )
}
