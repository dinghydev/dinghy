import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVERS_STACKED = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.servers_stacked',
  },
  _original_width: 100,
  _original_height: 100,
}

export function ServersStacked(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVERS_STACKED}
      {...props}
      _style={extendStyle(SERVERS_STACKED, props)}
    />
  )
}
