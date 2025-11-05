import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRIMARY = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.primary',
  },
  _width: 100,
  _height: 15,
}

export function Primary(props: NodeProps) {
  return <Shape {...PRIMARY} {...props} _style={extendStyle(PRIMARY, props)} />
}
