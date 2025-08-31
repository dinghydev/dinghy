import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_DATA_RETENTION_MANAGER = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Data_Retention_Manager',
  },
  _width: 60,
  _height: 60,
}

export function SapDataRetentionManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_DATA_RETENTION_MANAGER}
      {...props}
      _style={extendStyle(SAP_DATA_RETENTION_MANAGER, props)}
    />
  )
}
