import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IOT_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.iot2;',
  _width: 60,
  _height: 60,
}

export function Iot2(props: DiagramNodeProps) {
  return <Shape {...IOT_2} {...props} />
}
