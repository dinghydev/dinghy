import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MARKETING = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.marketing;',
  _width: 60,
  _height: 60,
}

export function Marketing(props: DiagramNodeProps) {
  return <Shape {...MARKETING} {...props} />
}
