import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_MASTER_DATA_GOVERNANCE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Master_Data_Governance',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapMasterDataGovernance(props: NodeProps) {
  return (
    <Shape
      {...SAP_MASTER_DATA_GOVERNANCE}
      {...props}
      _style={extendStyle(SAP_MASTER_DATA_GOVERNANCE, props)}
    />
  )
}
