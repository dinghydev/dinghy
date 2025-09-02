import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SALES_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.sales2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Sales2(props: DiagramNodeProps) {
  return <Shape {...SALES_2} {...props} _style={extendStyle(SALES_2, props)} />
}
