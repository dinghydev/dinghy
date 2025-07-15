import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_GENERIC_ORANGE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.server_generic;fillColor=#DA4026;',
  _width: 27,
  _height: 52,
}

export function ServerGenericOrange(props: DiagramNodeProps) {
  return <Shape {...SERVER_GENERIC_ORANGE} {...props} />
}
