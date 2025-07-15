import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_FARM_ORANGE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.server_farm;fillColor=#DA4026;',
  _width: 56,
  _height: 49,
}

export function ServerFarmOrange(props: DiagramNodeProps) {
  return <Shape {...SERVER_FARM_ORANGE} {...props} />
}
