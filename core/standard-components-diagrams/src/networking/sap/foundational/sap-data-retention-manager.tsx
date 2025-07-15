import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_DATA_RETENTION_MANAGER = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Data_Retention_Manager',
  _width: 50,
  _height: 50,
}

export function SapDataRetentionManager(props: DiagramNodeProps) {
  return <Shape {...SAP_DATA_RETENTION_MANAGER} {...props} />
}
