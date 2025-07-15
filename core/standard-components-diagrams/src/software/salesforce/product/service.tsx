import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.service;',
  _width: 60,
  _height: 49.199999999999996,
}

export function Service(props: DiagramNodeProps) {
  return <Shape {...SERVICE} {...props} />
}
