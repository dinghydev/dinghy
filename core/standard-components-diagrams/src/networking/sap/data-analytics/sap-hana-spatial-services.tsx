import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_HANA_SPATIAL_SERVICES = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_HANA_Spatial_Services',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapHanaSpatialServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_HANA_SPATIAL_SERVICES}
      {...props}
      _style={extendStyle(SAP_HANA_SPATIAL_SERVICES, props)}
    />
  )
}
