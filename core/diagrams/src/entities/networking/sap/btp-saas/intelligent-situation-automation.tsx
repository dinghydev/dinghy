import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTELLIGENT_SITUATION_AUTOMATION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Intelligent_Situation_Automation',
  },
  _original_width: 50,
  _original_height: 50,
}

export function IntelligentSituationAutomation(props: NodeProps) {
  return (
    <Shape
      {...INTELLIGENT_SITUATION_AUTOMATION}
      {...props}
      _style={extendStyle(INTELLIGENT_SITUATION_AUTOMATION, props)}
    />
  )
}
