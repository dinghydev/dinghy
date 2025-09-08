import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GROOVESHARK = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.grooveshark;fillColor=#000000;strokeColor=none',
  },
  _original_width: 62.2,
  _original_height: 62.2,
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
