import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STACKEXCHANGE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.stackexchange',
  },
  _width: 63.800000000000004,
  _height: 79,
}

export function Stackexchange(props: DiagramNodeProps) {
  return (
    <Shape
      {...STACKEXCHANGE}
      {...props}
      _style={extendStyle(STACKEXCHANGE, props)}
    />
  )
}
