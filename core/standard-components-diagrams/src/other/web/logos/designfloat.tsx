import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESIGNFLOAT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.designfloat;strokeColor=none',
  },
  _width: 60,
  _height: 60,
}

export function Designfloat(props: DiagramNodeProps) {
  return (
    <Shape
      {...DESIGNFLOAT}
      {...props}
      _style={extendStyle(DESIGNFLOAT, props)}
    />
  )
}
