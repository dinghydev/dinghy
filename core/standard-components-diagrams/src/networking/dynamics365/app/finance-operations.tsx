import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FINANCE_OPERATIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Finance_Operations.svg;strokeColor=none;',
  },
  _original_width: 55.24,
  _original_height: 68,
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
