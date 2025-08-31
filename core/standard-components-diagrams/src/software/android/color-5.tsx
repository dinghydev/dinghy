import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLOR_5 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;strokeColor=none;shape=rect;fillColor=#99cc00;',
  },
  _width: 60,
  _height: 60,
}

export function Color5(props: DiagramNodeProps) {
  return <Shape {...COLOR_5} {...props} _style={extendStyle(COLOR_5, props)} />
}
