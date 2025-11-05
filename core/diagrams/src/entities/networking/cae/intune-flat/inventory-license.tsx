import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INVENTORY_LICENSE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.inventory_license',
  },
  _original_width: 50,
  _original_height: 48,
}

export function InventoryLicense(props: NodeProps) {
  return (
    <Shape
      {...INVENTORY_LICENSE}
      {...props}
      _style={extendStyle(INVENTORY_LICENSE, props)}
    />
  )
}
