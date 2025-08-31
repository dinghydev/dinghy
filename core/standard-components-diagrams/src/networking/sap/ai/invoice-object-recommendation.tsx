import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INVOICE_OBJECT_RECOMMENDATION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Invoice_Object_Recommendation2',
  },
  _width: 60,
  _height: 60,
}

export function InvoiceObjectRecommendation(props: DiagramNodeProps) {
  return (
    <Shape
      {...INVOICE_OBJECT_RECOMMENDATION}
      {...props}
      _style={extendStyle(INVOICE_OBJECT_RECOMMENDATION, props)}
    />
  )
}
