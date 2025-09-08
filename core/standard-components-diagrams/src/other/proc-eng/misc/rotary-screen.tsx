import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROTARY_SCREEN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.rotary_screen;',
  },
  _original_width: 100,
  _original_height: 65,
}

export function RotaryScreen(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROTARY_SCREEN}
      {...props}
      _style={extendStyle(ROTARY_SCREEN, props)}
    />
  )
}
