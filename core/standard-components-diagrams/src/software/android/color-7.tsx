import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLOR_7 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;strokeColor=none;shape=rect;fillColor=#ffbb33;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Color7(props: DiagramNodeProps) {
  return <Shape {...COLOR_7} {...props} _style={extendStyle(COLOR_7, props)} />
}
