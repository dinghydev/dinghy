import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE_INVENTORY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.mobile_inventory',
  _width: 44,
  _height: 50,
}

export function MobileInventory(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_INVENTORY}
      {...props}
      _style={extendStyle(MOBILE_INVENTORY, props)}
    />
  )
}
