import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSFER_APPLIANCE = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function TransferAppliance(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSFER_APPLIANCE}
      {...props}
      _style={extendStyle(TRANSFER_APPLIANCE, props)}
    />
  )
}
