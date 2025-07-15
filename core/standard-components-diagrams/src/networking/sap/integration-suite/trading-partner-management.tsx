import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRADING_PARTNER_MANAGEMENT = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_Trading_Partner_Management',
  _width: 50,
  _height: 50,
}

export function TradingPartnerManagement(props: DiagramNodeProps) {
  return <Shape {...TRADING_PARTNER_MANAGEMENT} {...props} />
}
