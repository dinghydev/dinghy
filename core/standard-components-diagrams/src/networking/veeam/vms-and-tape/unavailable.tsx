import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNAVAILABLE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.unavailable;',
  },
  _width: 36,
  _height: 36,
}

export function Unavailable(props: DiagramNodeProps) {
  return (
    <Shape
      {...UNAVAILABLE}
      {...props}
      _style={extendStyle(UNAVAILABLE, props)}
    />
  )
}
