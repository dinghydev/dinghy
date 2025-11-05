import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_OMNICHANNEL_PROMOTION_PRICING = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Omnichannel_Promotion_Pricing',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapOmnichannelPromotionPricing(props: NodeProps) {
  return (
    <Shape
      {...SAP_OMNICHANNEL_PROMOTION_PRICING}
      {...props}
      _style={extendStyle(SAP_OMNICHANNEL_PROMOTION_PRICING, props)}
    />
  )
}
