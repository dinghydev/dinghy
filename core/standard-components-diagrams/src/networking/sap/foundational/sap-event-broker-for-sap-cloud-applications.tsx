import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_EVENT_BROKER_FOR_SAP_CLOUD_APPLICATIONS = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Event_Broker_for_SAP_Cloud_Applications',
  _width: 50,
  _height: 50,
}

export function SapEventBrokerForSapCloudApplications(props: DiagramNodeProps) {
  return <Shape {...SAP_EVENT_BROKER_FOR_SAP_CLOUD_APPLICATIONS} {...props} />
}
