import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DESIGNFLOAT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.designfloat;strokeColor=none',
  },
  _original_width: 72,
  _original_height: 72,
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
