import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEALTH_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.health2;',
  _width: 60,
  _height: 60,
}

export function Health2(props: DiagramNodeProps) {
  return <Shape {...HEALTH_2} {...props} />
}
