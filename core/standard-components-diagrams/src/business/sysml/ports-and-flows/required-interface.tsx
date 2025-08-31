import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REQUIRED_INTERFACE = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.port4;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 0,
  _height: 60,
}

export function RequiredInterface(props: DiagramNodeProps) {
  return (
    <Shape
      {...REQUIRED_INTERFACE}
      {...props}
      _style={extendStyle(REQUIRED_INTERFACE, props)}
    />
  )
}
