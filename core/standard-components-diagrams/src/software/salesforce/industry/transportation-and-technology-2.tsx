import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSPORTATION_AND_TECHNOLOGY_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.transportation_and_technology2;',
  },
  _original_width: 60,
  _original_height: 60,
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
