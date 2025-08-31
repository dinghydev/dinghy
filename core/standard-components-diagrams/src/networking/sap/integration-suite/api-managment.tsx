import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const API_MANAGMENT = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_API_Managment',
  },
  _width: 60,
  _height: 60,
}

export function ApiManagment(props: DiagramNodeProps) {
  return (
    <Shape
      {...API_MANAGMENT}
      {...props}
      _style={extendStyle(API_MANAGMENT, props)}
    />
  )
}
