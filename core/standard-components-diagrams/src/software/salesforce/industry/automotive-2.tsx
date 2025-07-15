import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTOMOTIVE_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.automotive2;',
  _width: 60,
  _height: 60,
}

export function Automotive2(props: DiagramNodeProps) {
  return <Shape {...AUTOMOTIVE_2} {...props} />
}
