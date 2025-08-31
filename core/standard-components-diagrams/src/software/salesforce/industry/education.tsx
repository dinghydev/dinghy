import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDUCATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.education;',
  },
  _width: 60,
  _height: 40.2,
}

export function Education(props: DiagramNodeProps) {
  return (
    <Shape {...EDUCATION} {...props} _style={extendStyle(EDUCATION, props)} />
  )
}
