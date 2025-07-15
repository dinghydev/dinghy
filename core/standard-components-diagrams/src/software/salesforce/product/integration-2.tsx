import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTEGRATION_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.integration2;',
  _width: 60,
  _height: 60,
}

export function Integration2(props: DiagramNodeProps) {
  return <Shape {...INTEGRATION_2} {...props} />
}
