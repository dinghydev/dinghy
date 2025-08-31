import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_SPACE_INTEGRATION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_Data_Space_Integration',
  },
  _width: 60,
  _height: 60,
}

export function DataSpaceIntegration(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_SPACE_INTEGRATION}
      {...props}
      _style={extendStyle(DATA_SPACE_INTEGRATION, props)}
    />
  )
}
