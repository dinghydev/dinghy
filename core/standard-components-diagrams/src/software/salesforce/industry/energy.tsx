import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENERGY = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.energy;',
  _width: 45,
  _height: 60,
}

export function Energy(props: DiagramNodeProps) {
  return <Shape {...ENERGY} {...props} />
}
