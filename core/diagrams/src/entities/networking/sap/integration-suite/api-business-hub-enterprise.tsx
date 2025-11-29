import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const API_BUSINESS_HUB_ENTERPRISE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=API_Business_Hub_Enterprise',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ApiBusinessHubEnterprise(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, API_BUSINESS_HUB_ENTERPRISE)}
    />
  )
}
