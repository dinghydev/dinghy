import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUCCESS = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.success;',
  _width: 40.800000000000004,
  _height: 60,
}

export function Success(props: DiagramNodeProps) {
  return <Shape {...SUCCESS} {...props} />
}
