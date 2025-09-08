import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TERMINAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=ellipse;',
  },
  _original_width: 10,
  _original_height: 10,
}

export function Terminal(props: DiagramNodeProps) {
  return (
    <Shape {...TERMINAL} {...props} _style={extendStyle(TERMINAL, props)} />
  )
}
