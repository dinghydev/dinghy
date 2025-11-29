import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECK_SCALE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.check_scale',
  },
  _width: 100,
  _height: 75,
}

export function CheckScale(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHECK_SCALE)} />
}
