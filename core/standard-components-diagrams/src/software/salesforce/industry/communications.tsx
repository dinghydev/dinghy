import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMUNICATIONS = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.communications;',
  _width: 47.400000000000006,
  _height: 60,
}

export function Communications(props: DiagramNodeProps) {
  return <Shape {...COMMUNICATIONS} {...props} />
}
