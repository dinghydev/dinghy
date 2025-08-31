import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SALES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.sales;',
  },
  _width: 60,
  _height: 60,
}

export function Sales(props: DiagramNodeProps) {
  return <Shape {...SALES} {...props} _style={extendStyle(SALES, props)} />
}
