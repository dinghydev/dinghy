import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSACTION_MANAGER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/transaction_manager.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function TransactionManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSACTION_MANAGER}
      {...props}
      _style={extendStyle(TRANSACTION_MANAGER, props)}
    />
  )
}
