import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLOR_3 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;strokeColor=none;shape=rect;fillColor=#aa66cc;',
  _width: 60,
  _height: 60,
}

export function Color3(props: DiagramNodeProps) {
  return <Shape {...COLOR_3} {...props} _style={extendStyle(COLOR_3, props)} />
}
