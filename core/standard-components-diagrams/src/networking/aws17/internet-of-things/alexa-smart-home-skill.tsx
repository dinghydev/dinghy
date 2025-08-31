import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALEXA_SMART_HOME_SKILL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.alexa_smart_home_skill;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 90,
  _height: 70.5,
}

export function AlexaSmartHomeSkill(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALEXA_SMART_HOME_SKILL}
      {...props}
      _style={extendStyle(ALEXA_SMART_HOME_SKILL, props)}
    />
  )
}
