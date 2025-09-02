import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUSTOMER_360_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.customer_3602;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Customer3602(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOMER_360_2}
      {...props}
      _style={extendStyle(CUSTOMER_360_2, props)}
    />
  )
}
