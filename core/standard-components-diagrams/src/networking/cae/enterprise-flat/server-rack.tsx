import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_RACK = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.server_rack',
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
