import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COLOR_7 = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;strokeColor=none;shape=rect;fillColor=#ffbb33;',
  _width: 50,
  _height: 50,
}

export function Color7(props: DiagramNodeProps) {
  return <Shape {...COLOR_7} {...props} />
}
