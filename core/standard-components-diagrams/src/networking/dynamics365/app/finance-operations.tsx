import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FINANCE_OPERATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Finance_Operations.svg;',
  _width: 55.24,
  _height: 68,
}

export function FinanceOperations(props: DiagramNodeProps) {
  return <Shape {...FINANCE_OPERATIONS} {...props} />
}
