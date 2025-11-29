import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_COMPUTER = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_computer',
  },
  _original_width: 100,
  _original_height: 88,
}

export function CloudComputer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLOUD_COMPUTER)} />
}
