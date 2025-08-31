import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTELLIGENT_SITUATION_AUTOMATION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Intelligent_Situation_Automation',
  },
  _width: 60,
  _height: 60,
}

export function IntelligentSituationAutomation(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTELLIGENT_SITUATION_AUTOMATION}
      {...props}
      _style={extendStyle(INTELLIGENT_SITUATION_AUTOMATION, props)}
    />
  )
}
