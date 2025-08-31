import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTENSIBILITY_SERVICES_FOR_SAP_BTP = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Extensibility_Service',
  _width: 60,
  _height: 60,
}

export function ExtensibilityServicesForSapBtp(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTENSIBILITY_SERVICES_FOR_SAP_BTP}
      {...props}
      _style={extendStyle(EXTENSIBILITY_SERVICES_FOR_SAP_BTP, props)}
    />
  )
}
