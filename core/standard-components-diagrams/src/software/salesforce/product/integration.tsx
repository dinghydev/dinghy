import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTEGRATION = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.integration;',
  _width: 60,
  _height: 60,
}

export function Integration(props: DiagramNodeProps) {
  return <Shape {...INTEGRATION} {...props} />
}
