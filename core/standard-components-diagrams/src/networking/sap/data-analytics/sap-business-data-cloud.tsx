import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_BUSINESS_DATA_CLOUD = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Business_Data_Cloud',
  },
  _width: 60,
  _height: 60,
}

export function SapBusinessDataCloud(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_BUSINESS_DATA_CLOUD}
      {...props}
      _style={extendStyle(SAP_BUSINESS_DATA_CLOUD, props)}
    />
  )
}
