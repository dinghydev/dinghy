import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_MASTER_DATA_INTEGRATION = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Master_Data_Integration',
  _width: 60,
  _height: 60,
}

export function SapMasterDataIntegration(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_MASTER_DATA_INTEGRATION}
      {...props}
      _style={extendStyle(SAP_MASTER_DATA_INTEGRATION, props)}
    />
  )
}
