import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBILE_INVENTORY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.mobile_inventory',
  },
  _original_width: 44,
  _original_height: 50,
}

export function MobileInventory(props: NodeProps) {
  return (
    <Shape
      {...MOBILE_INVENTORY}
      {...props}
      _style={extendStyle(MOBILE_INVENTORY, props)}
    />
  )
}
