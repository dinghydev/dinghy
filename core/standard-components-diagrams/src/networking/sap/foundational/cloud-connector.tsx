import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_CONNECTOR = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Cloud_Connector2',
  },
  _original_width: 50,
  _original_height: 50,
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
