import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUSTOMER_360 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.customer_360;',
  },
  _width: 60,
  _height: 54.6,
}

export function Customer360(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOMER_360}
      {...props}
      _style={extendStyle(CUSTOMER_360, props)}
    />
  )
}
