import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_CLOUD_APPLICATION_PROGRAMMING_MODEL = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Cloud_Application_Programming_Model',
  _width: 60,
  _height: 60,
}

export function SapCloudApplicationProgrammingModel(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_CLOUD_APPLICATION_PROGRAMMING_MODEL}
      {...props}
      _style={extendStyle(SAP_CLOUD_APPLICATION_PROGRAMMING_MODEL, props)}
    />
  )
}
