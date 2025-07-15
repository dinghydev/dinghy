import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_LANDSCAPE_MANAGEMENT_CLOUD = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Landscape_Management_Cloud',
  _width: 50,
  _height: 50,
}

export function SapLandscapeManagementCloud(props: DiagramNodeProps) {
  return <Shape {...SAP_LANDSCAPE_MANAGEMENT_CLOUD} {...props} />
}
