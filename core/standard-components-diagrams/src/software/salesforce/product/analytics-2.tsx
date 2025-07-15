import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANALYTICS_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.analytics2;',
  _width: 60,
  _height: 60,
}

export function Analytics2(props: DiagramNodeProps) {
  return <Shape {...ANALYTICS_2} {...props} />
}
