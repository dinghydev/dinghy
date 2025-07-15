import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GOVERNMENT_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.government2;',
  _width: 60,
  _height: 60,
}

export function Government2(props: DiagramNodeProps) {
  return <Shape {...GOVERNMENT_2} {...props} />
}
