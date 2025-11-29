import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HALF_CLOUD = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.half_cloud',
  },
  _width: 100,
  _height: 50,
}

export function HalfCloud(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HALF_CLOUD)} />
}
