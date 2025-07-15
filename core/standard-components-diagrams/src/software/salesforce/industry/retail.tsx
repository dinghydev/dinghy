import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RETAIL = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.retail;',
  _width: 45,
  _height: 60,
}

export function Retail(props: DiagramNodeProps) {
  return <Shape {...RETAIL} {...props} />
}
