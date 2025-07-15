import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.service2;',
  _width: 60,
  _height: 60,
}

export function Service2(props: DiagramNodeProps) {
  return <Shape {...SERVICE_2} {...props} />
}
