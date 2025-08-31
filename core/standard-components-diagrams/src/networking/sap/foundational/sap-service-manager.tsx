import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_SERVICE_MANAGER = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Service_Manager',
  _width: 60,
  _height: 60,
}

export function SapServiceManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_SERVICE_MANAGER}
      {...props}
      _style={extendStyle(SAP_SERVICE_MANAGER, props)}
    />
  )
}
