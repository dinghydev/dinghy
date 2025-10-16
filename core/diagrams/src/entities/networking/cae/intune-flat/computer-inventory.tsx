import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPUTER_INVENTORY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.computer_inventory',
  },
  _original_width: 50,
  _original_height: 45,
}

export function ComputerInventory(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPUTER_INVENTORY}
      {...props}
      _style={extendStyle(COMPUTER_INVENTORY, props)}
    />
  )
}
