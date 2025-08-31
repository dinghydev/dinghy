import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSPORTATION_AND_TECHNOLOGY_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.transportation_and_technology2;',
  _width: 60,
  _height: 60,
}

export function TransportationAndTechnology2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSPORTATION_AND_TECHNOLOGY_2}
      {...props}
      _style={extendStyle(TRANSPORTATION_AND_TECHNOLOGY_2, props)}
    />
  )
}
