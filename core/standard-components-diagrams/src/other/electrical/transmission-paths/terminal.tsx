import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TERMINAL = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=ellipse;',
  _width: 10,
  _height: 10,
}

export function Terminal(props: DiagramNodeProps) {
  return (
    <Shape {...TERMINAL} {...props} _style={extendStyle(TERMINAL, props)} />
  )
}
