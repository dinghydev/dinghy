import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOURCEFORGE_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.sourceforge_2;fillColor=#0078AF;gradientColor=#00385E',
  _width: 102.4,
  _height: 102.4,
}

export function Sourceforge2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOURCEFORGE_2}
      {...props}
      _style={extendStyle(SOURCEFORGE_2, props)}
    />
  )
}
