import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPEN_CONNECTORS = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_Open_Connectors',
  },
  _original_width: 50,
  _original_height: 50,
}

export function OpenConnectors(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPEN_CONNECTORS}
      {...props}
      _style={extendStyle(OPEN_CONNECTORS, props)}
    />
  )
}
