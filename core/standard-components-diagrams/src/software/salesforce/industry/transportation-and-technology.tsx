import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSPORTATION_AND_TECHNOLOGY = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.transportation_and_technology;',
  _width: 60,
  _height: 60,
}

export function TransportationAndTechnology(props: DiagramNodeProps) {
  return <Shape {...TRANSPORTATION_AND_TECHNOLOGY} {...props} />
}
