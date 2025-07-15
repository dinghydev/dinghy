import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_RACK = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.server_rack;',
  _width: 50,
  _height: 50,
}

export function ServerRack(props: DiagramNodeProps) {
  return <Shape {...SERVER_RACK} {...props} />
}
