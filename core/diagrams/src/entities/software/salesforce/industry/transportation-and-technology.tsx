import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSPORTATION_AND_TECHNOLOGY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.transportation_and_technology;',
  },
  _original_width: 60,
  _original_height: 60,
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
