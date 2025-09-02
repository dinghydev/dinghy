import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_GENERIC_ORANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.server_generic;fillColor=#DA4026;',
  },
  _original_width: 27,
  _original_height: 52,
}

export function ServerGenericOrange(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_GENERIC_ORANGE}
      {...props}
      _style={extendStyle(SERVER_GENERIC_ORANGE, props)}
    />
  )
}
