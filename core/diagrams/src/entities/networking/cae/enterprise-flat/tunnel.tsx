import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TUNNEL = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.general.tunnel',
  },
  _width: 50,
  _height: 9,
}

export function Tunnel(props: NodeProps) {
  return <Shape {...TUNNEL} {...props} _style={extendStyle(TUNNEL, props)} />
}
