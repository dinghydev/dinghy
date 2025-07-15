import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_SPACE_INTEGRATION = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_Data_Space_Integration',
  _width: 50,
  _height: 50,
}

export function DataSpaceIntegration(props: DiagramNodeProps) {
  return <Shape {...DATA_SPACE_INTEGRATION} {...props} />
}
