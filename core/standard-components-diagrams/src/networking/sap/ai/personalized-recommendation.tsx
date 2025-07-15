import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERSONALIZED_RECOMMENDATION = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Personalized_Recommendation',
  _width: 50,
  _height: 50,
}

export function PersonalizedRecommendation(props: DiagramNodeProps) {
  return <Shape {...PERSONALIZED_RECOMMENDATION} {...props} />
}
