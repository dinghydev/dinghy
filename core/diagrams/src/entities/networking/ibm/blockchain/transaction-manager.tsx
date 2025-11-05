import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRANSACTION_MANAGER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/transaction_manager.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function TransactionManager(props: NodeProps) {
  return (
    <Shape
      {...TRANSACTION_MANAGER}
      {...props}
      _style={extendStyle(TRANSACTION_MANAGER, props)}
    />
  )
}
