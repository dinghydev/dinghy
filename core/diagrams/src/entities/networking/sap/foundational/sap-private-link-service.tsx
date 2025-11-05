import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_PRIVATE_LINK_SERVICE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Private_Link_service',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapPrivateLinkService(props: NodeProps) {
  return (
    <Shape
      {...SAP_PRIVATE_LINK_SERVICE}
      {...props}
      _style={extendStyle(SAP_PRIVATE_LINK_SERVICE, props)}
    />
  )
}
