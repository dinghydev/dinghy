import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COLOR_4 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;strokeColor=none;shape=rect;fillColor=#9933cc;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Color4(props: DiagramNodeProps) {
  return <Shape {...COLOR_4} {...props} _style={extendStyle(COLOR_4, props)} />
}
