import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_MOBILE_SERVICES = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Mobile_Services',
  _width: 60,
  _height: 60,
}

export function SapMobileServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_MOBILE_SERVICES}
      {...props}
      _style={extendStyle(SAP_MOBILE_SERVICES, props)}
    />
  )
}
