import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACCESS_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.access_control;',
  },
  _width: 60,
  _height: 60,
}

export function AccessControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACCESS_CONTROL}
      {...props}
      _style={extendStyle(ACCESS_CONTROL, props)}
    />
  )
}
