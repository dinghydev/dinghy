import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVER_GENERIC_GREEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.server_generic;fillColor=#7FBA42;',
  },
  _width: 27,
  _height: 52,
}

export function ServerGenericGreen(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_GENERIC_GREEN}
      {...props}
      _style={extendStyle(SERVER_GENERIC_GREEN, props)}
    />
  )
}
