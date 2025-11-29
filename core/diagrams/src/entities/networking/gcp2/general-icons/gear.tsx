import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GEAR = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.gear',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Gear(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GEAR)} />
}
