import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MONITOR = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.monitor',
  },
  _original_width: 100,
  _original_height: 85,
}

export function Monitor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MONITOR)} />
}
