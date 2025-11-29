import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INVENTORY_BOX = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.inventory_box;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function InventoryBox(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INVENTORY_BOX)} />
}
