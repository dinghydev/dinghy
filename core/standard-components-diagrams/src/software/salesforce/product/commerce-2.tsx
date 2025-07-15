import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMERCE_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.commerce2;',
  _width: 60,
  _height: 60,
}

export function Commerce2(props: DiagramNodeProps) {
  return <Shape {...COMMERCE_2} {...props} />
}
