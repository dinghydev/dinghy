import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANUFACTURING = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.manufacturing;',
  _width: 60,
  _height: 60,
}

export function Manufacturing(props: DiagramNodeProps) {
  return <Shape {...MANUFACTURING} {...props} />
}
