import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GROOVESHARK = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.grooveshark;fillColor=#695D5D;gradientColor=#000000',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Grooveshark(props: DiagramNodeProps) {
  return (
    <Shape
      {...GROOVESHARK}
      {...props}
      _style={extendStyle(GROOVESHARK, props)}
    />
  )
}
