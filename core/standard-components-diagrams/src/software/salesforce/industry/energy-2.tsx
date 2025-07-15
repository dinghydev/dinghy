import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENERGY_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.energy2;',
  _width: 60,
  _height: 60,
}

export function Energy2(props: DiagramNodeProps) {
  return <Shape {...ENERGY_2} {...props} />
}
