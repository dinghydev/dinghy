import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUCCESS_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.success2;',
  _width: 60,
  _height: 60,
}

export function Success2(props: DiagramNodeProps) {
  return <Shape {...SUCCESS_2} {...props} />
}
