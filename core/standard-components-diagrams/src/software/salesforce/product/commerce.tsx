import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMERCE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.commerce;',
  _width: 60,
  _height: 52.8,
}

export function Commerce(props: DiagramNodeProps) {
  return <Shape {...COMMERCE} {...props} />
}
