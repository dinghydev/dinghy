import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FINANCE_GOVERNMENT = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.finance_government;',
  },
  _original_width: 50,
  _original_height: 45.735,
}

export function FinanceGovernment(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FINANCE_GOVERNMENT)} />
}
