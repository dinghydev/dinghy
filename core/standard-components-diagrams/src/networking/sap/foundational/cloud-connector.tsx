import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_CONNECTOR = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Cloud_Connector2',
  _width: 60,
  _height: 60,
}

export function CloudConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_CONNECTOR}
      {...props}
      _style={extendStyle(CLOUD_CONNECTOR, props)}
    />
  )
}
