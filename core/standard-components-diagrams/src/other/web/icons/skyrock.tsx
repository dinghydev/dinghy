import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SKYROCK = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.skyrock;fillColor=#47B8FF;gradientColor=#006AAD',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Skyrock(props: DiagramNodeProps) {
  return <Shape {...SKYROCK} {...props} _style={extendStyle(SKYROCK, props)} />
}
