import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IOT = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.iot;',
  _width: 60,
  _height: 60,
}

export function Iot(props: DiagramNodeProps) {
  return <Shape {...IOT} {...props} />
}
