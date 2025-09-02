import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AIM = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.aim;fillColor=#27E1E5;gradientColor=#0A4361',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Aim(props: DiagramNodeProps) {
  return <Shape {...AIM} {...props} _style={extendStyle(AIM, props)} />
}
