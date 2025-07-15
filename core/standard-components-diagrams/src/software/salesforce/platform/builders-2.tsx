import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUILDERS_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.builders2;',
  _width: 60,
  _height: 60,
}

export function Builders2(props: DiagramNodeProps) {
  return <Shape {...BUILDERS_2} {...props} />
}
