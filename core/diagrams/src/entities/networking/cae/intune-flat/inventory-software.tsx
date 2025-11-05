import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INVENTORY_SOFTWARE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.inventory_software',
  },
  _original_width: 50,
  _original_height: 49,
}

export function InventorySoftware(props: NodeProps) {
  return (
    <Shape
      {...INVENTORY_SOFTWARE}
      {...props}
      _style={extendStyle(INVENTORY_SOFTWARE, props)}
    />
  )
}
