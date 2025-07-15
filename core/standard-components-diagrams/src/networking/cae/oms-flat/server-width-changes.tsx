import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_WIDTH_CHANGES = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.server_width_changes',
  _width: 47,
  _height: 50,
}

export function ServerWidthChanges(props: DiagramNodeProps) {
  return <Shape {...SERVER_WIDTH_CHANGES} {...props} />
}
