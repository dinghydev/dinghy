import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_PERSONAL_DATA_MANAGER = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Personal_Data_Manager',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapPersonalDataManager(props: NodeProps) {
  return (
    <Shape
      {...SAP_PERSONAL_DATA_MANAGER}
      {...props}
      _style={extendStyle(SAP_PERSONAL_DATA_MANAGER, props)}
    />
  )
}
