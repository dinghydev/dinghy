import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INVENTORY_LICENSE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.inventory_license',
  _width: 50,
  _height: 48,
}

export function InventoryLicense(props: DiagramNodeProps) {
  return (
    <Shape
      {...INVENTORY_LICENSE}
      {...props}
      _style={extendStyle(INVENTORY_LICENSE, props)}
    />
  )
}
