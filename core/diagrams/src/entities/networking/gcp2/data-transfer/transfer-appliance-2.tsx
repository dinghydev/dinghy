import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRANSFER_APPLIANCE_2 = {
  _style: {
    entity:
      'shape=mxgraph.gcp2.doubleRect;fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _width: 0,
  _height: 68,
}

export function TransferAppliance2(props: NodeProps) {
  return (
    <Shape
      {...TRANSFER_APPLIANCE_2}
      {...props}
      _style={extendStyle(TRANSFER_APPLIANCE_2, props)}
    />
  )
}
