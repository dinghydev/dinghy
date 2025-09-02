import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLAYFIRE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.playfire;fillColor=#FDA21A;gradientColor=#FEE635;strokeColor=none',
  },
  _original_width: 62,
  _original_height: 61.6,
}

export function Playfire(props: DiagramNodeProps) {
  return (
    <Shape {...PLAYFIRE} {...props} _style={extendStyle(PLAYFIRE, props)} />
  )
}
