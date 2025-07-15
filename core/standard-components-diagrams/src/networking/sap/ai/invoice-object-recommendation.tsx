import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INVOICE_OBJECT_RECOMMENDATION = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Invoice_Object_Recommendation2',
  _width: 50,
  _height: 50,
}

export function InvoiceObjectRecommendation(props: DiagramNodeProps) {
  return <Shape {...INVOICE_OBJECT_RECOMMENDATION} {...props} />
}
