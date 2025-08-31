import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FINANCE_OPERATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Finance_Operations.svg;strokeColor=none;',
  _width: 55.24,
  _height: 68,
}

export function FinanceOperations(props: DiagramNodeProps) {
  return (
    <Shape
      {...FINANCE_OPERATIONS}
      {...props}
      _style={extendStyle(FINANCE_OPERATIONS, props)}
    />
  )
}
