import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_COLLABORATIVE_DEMAND_AND_CAPACITY_MANAGEMENT = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Collaborative_Demand_and_Capacity_Management',
  },
  _width: 60,
  _height: 60,
}

export function SapCollaborativeDemandAndCapacityManagement(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...SAP_COLLABORATIVE_DEMAND_AND_CAPACITY_MANAGEMENT}
      {...props}
      _style={extendStyle(
        SAP_COLLABORATIVE_DEMAND_AND_CAPACITY_MANAGEMENT,
        props,
      )}
    />
  )
}
