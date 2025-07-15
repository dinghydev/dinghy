import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LEARNING = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.learning;',
  _width: 60,
  _height: 60,
}

export function Learning(props: DiagramNodeProps) {
  return <Shape {...LEARNING} {...props} />
}
