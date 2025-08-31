import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LEARNING_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.learning2;',
  },
  _width: 60,
  _height: 60,
}

export function Learning2(props: DiagramNodeProps) {
  return (
    <Shape {...LEARNING_2} {...props} _style={extendStyle(LEARNING_2, props)} />
  )
}
