import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;strokeColor=none;shape=rect;fillColor=#33b5e5;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Color(props: DiagramNodeProps) {
  return <Shape {...COLOR} {...props} _style={extendStyle(COLOR, props)} />
}
