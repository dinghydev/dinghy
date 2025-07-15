import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SALES = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.sales;',
  _width: 60,
  _height: 60,
}

export function Sales(props: DiagramNodeProps) {
  return <Shape {...SALES} {...props} />
}
