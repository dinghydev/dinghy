import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.data2;',
  _width: 60,
  _height: 60,
}

export function Data2(props: DiagramNodeProps) {
  return <Shape {...DATA_2} {...props} />
}
