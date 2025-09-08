import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAP_SUSTAINABILITY_DATA_EXCHANGE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Sustainability_Data_Exchange',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapSustainabilityDataExchange(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_SUSTAINABILITY_DATA_EXCHANGE}
      {...props}
      _style={extendStyle(SAP_SUSTAINABILITY_DATA_EXCHANGE, props)}
    />
  )
}
