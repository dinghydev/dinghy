import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_RACK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.server_rack;',
  },
  _width: 60,
  _height: 60,
}

export function ServerRack(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_RACK}
      {...props}
      _style={extendStyle(SERVER_RACK, props)}
    />
  )
}
