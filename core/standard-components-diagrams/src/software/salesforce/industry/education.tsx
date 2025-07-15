import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EDUCATION = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.education;',
  _width: 60,
  _height: 40.2,
}

export function Education(props: DiagramNodeProps) {
  return <Shape {...EDUCATION} {...props} />
}
