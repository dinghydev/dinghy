import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDUCATION_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.education2;',
  _width: 60,
  _height: 60,
}

export function Education2(props: DiagramNodeProps) {
  return (
    <Shape
      {...EDUCATION_2}
      {...props}
      _style={extendStyle(EDUCATION_2, props)}
    />
  )
}
