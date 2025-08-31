import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERALIZATION = {
  _style:
    'endArrow=block;html=1;endFill=0;edgeStyle=none;endSize=12;labelBackgroundColor=none;align=left;',
  _width: 2,
  _height: 180,
}

export function Generalization(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERALIZATION}
      {...props}
      _style={extendStyle(GENERALIZATION, props)}
    />
  )
}
