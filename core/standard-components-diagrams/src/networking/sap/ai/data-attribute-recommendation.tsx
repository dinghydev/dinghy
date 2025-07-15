import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_ATTRIBUTE_RECOMMENDATION = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Data_Attribute_Recommendation',
  _width: 50,
  _height: 50,
}

export function DataAttributeRecommendation(props: DiagramNodeProps) {
  return <Shape {...DATA_ATTRIBUTE_RECOMMENDATION} {...props} />
}
