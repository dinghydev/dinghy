import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_FARM_BLUE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.server_farm;fillColor=#2072B8;',
  },
  _original_width: 56,
  _original_height: 49,
}

export function ServerFarmBlue(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_FARM_BLUE}
      {...props}
      _style={extendStyle(SERVER_FARM_BLUE, props)}
    />
  )
}
