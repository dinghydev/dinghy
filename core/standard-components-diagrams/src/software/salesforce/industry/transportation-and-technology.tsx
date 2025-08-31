import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSPORTATION_AND_TECHNOLOGY = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.transportation_and_technology;',
  _width: 60,
  _height: 60,
}

export function TransportationAndTechnology(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSPORTATION_AND_TECHNOLOGY}
      {...props}
      _style={extendStyle(TRANSPORTATION_AND_TECHNOLOGY, props)}
    />
  )
}
