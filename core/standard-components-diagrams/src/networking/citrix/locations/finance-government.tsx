import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FINANCE_GOVERNMENT = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.finance_government;',
  _width: 50,
  _height: 45.735,
}

export function FinanceGovernment(props: DiagramNodeProps) {
  return (
    <Shape
      {...FINANCE_GOVERNMENT}
      {...props}
      _style={extendStyle(FINANCE_GOVERNMENT, props)}
    />
  )
}
