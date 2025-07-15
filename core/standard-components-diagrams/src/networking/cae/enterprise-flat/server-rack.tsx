import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_RACK = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.server_rack',
  _width: 50,
  _height: 50,
}

export function ServerRack(props: DiagramNodeProps) {
  return <Shape {...SERVER_RACK} {...props} />
}
