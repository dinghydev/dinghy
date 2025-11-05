import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_FARM = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.server_farm',
  },
  _width: 50,
  _height: 32,
}

export function ServerFarm(props: NodeProps) {
  return (
    <Shape
      {...SERVER_FARM}
      {...props}
      _style={extendStyle(SERVER_FARM, props)}
    />
  )
}
