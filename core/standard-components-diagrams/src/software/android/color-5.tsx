import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COLOR_5 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;strokeColor=none;shape=rect;fillColor=#99cc00;',
  _width: 50,
  _height: 50,
}

export function Color5(props: DiagramNodeProps) {
  return <Shape {...COLOR_5} {...props} />
}
