import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MARKETING_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.marketing2;',
  _width: 60,
  _height: 60,
}

export function Marketing2(props: DiagramNodeProps) {
  return <Shape {...MARKETING_2} {...props} />
}
