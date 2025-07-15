import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LEARNING_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.learning2;',
  _width: 60,
  _height: 60,
}

export function Learning2(props: DiagramNodeProps) {
  return <Shape {...LEARNING_2} {...props} />
}
