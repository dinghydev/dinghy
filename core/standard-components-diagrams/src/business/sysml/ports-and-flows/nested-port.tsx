import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NESTED_PORT = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.nestedPort;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 160,
  _original_height: 60,
}

export function NestedPort(props: DiagramNodeProps) {
  return (
    <Shape
      {...NESTED_PORT}
      {...props}
      _style={extendStyle(NESTED_PORT, props)}
    />
  )
}
