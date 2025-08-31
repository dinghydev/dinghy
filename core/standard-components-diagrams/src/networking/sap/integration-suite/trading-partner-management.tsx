import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRADING_PARTNER_MANAGEMENT = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_Trading_Partner_Management',
  _width: 60,
  _height: 60,
}

export function TradingPartnerManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRADING_PARTNER_MANAGEMENT}
      {...props}
      _style={extendStyle(TRADING_PARTNER_MANAGEMENT, props)}
    />
  )
}
