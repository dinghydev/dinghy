import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALEXA_SKILL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.alexa_skill;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function AlexaSkill(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALEXA_SKILL}
      {...props}
      _style={extendStyle(ALEXA_SKILL, props)}
    />
  )
}
