import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORLD_NETWORK = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.globe_world',
  },
  _width: 100,
  _height: 95,
}

export function WorldNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORLD_NETWORK}
      {...props}
      _style={extendStyle(WORLD_NETWORK, props)}
    />
  )
}
