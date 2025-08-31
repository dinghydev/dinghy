import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIVEJOURNAL = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.livejournal;fillColor=#2690E5;gradientColor=#0A2463',
  _width: 102.4,
  _height: 102.4,
}

export function Livejournal(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIVEJOURNAL}
      {...props}
      _style={extendStyle(LIVEJOURNAL, props)}
    />
  )
}
