import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERSONALIZED_RECOMMENDATION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Personalized_Recommendation',
  },
  _original_width: 50,
  _original_height: 50,
}

export function PersonalizedRecommendation(props: NodeProps) {
  return (
    <Shape
      {...PERSONALIZED_RECOMMENDATION}
      {...props}
      _style={extendStyle(PERSONALIZED_RECOMMENDATION, props)}
    />
  )
}
