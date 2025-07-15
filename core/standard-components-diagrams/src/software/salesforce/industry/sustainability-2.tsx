import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUSTAINABILITY_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.sustainability2;',
  _width: 60,
  _height: 60,
}

export function Sustainability2(props: DiagramNodeProps) {
  return <Shape {...SUSTAINABILITY_2} {...props} />
}
