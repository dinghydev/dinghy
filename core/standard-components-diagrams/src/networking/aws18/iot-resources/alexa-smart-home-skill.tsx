import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALEXA_SMART_HOME_SKILL = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.alexa_smart_home_skill;',
  _width: 60,
  _height: 60,
}

export function AlexaSmartHomeSkill(props: DiagramNodeProps) {
  return <Shape {...ALEXA_SMART_HOME_SKILL} {...props} />
}
