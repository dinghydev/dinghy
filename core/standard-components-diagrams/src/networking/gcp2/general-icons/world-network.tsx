import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORLD_NETWORK = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.globe_world',
  },
  _original_width: 100,
  _original_height: 95,
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
