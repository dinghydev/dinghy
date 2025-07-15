import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.data;',
  _width: 48.6,
  _height: 60,
}

export function Data(props: DiagramNodeProps) {
  return <Shape {...DATA} {...props} />
}
