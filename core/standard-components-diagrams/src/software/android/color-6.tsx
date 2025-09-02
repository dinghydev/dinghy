import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLOR_6 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;strokeColor=none;shape=rect;fillColor=#669900;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Color6(props: DiagramNodeProps) {
  return <Shape {...COLOR_6} {...props} _style={extendStyle(COLOR_6, props)} />
}
