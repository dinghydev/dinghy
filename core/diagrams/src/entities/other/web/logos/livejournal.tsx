import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIVEJOURNAL = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.livejournal;fillColor=#2690E5;gradientColor=#0A2463',
  },
  _original_width: 64,
  _original_height: 68.60000000000001,
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
