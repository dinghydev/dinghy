import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_MOBILE_SERVICES = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Mobile_Services',
  _width: 50,
  _height: 50,
}

export function SapMobileServices(props: DiagramNodeProps) {
  return <Shape {...SAP_MOBILE_SERVICES} {...props} />
}
