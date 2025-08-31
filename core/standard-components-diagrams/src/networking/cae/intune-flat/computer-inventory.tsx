import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPUTER_INVENTORY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.computer_inventory',
  },
  _width: 50,
  _height: 45,
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
