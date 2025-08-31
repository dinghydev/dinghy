import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_SUSTAINABILITY_DATA_EXCHANGE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Sustainability_Data_Exchange',
  },
  _width: 60,
  _height: 60,
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
