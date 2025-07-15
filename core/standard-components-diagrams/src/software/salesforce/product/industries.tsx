import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDUSTRIES = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.industries;',
  _width: 53.4,
  _height: 60,
}

export function Industries(props: DiagramNodeProps) {
  return <Shape {...INDUSTRIES} {...props} />
}
