import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOYALTY_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.loyalty2;',
  _width: 60,
  _height: 60,
}

export function Loyalty2(props: DiagramNodeProps) {
  return <Shape {...LOYALTY_2} {...props} />
}
