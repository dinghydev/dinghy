import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const J9781A_2530_48_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9781a_2530_48_front;',
  },
  _width: 142,
  _height: 15,
}

export function J9781a253048Front(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, J9781A_2530_48_FRONT)} />
}
