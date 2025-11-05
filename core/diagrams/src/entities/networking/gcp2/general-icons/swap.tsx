import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWAP = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.swap',
  },
  _width: 100,
  _height: 51,
}

export function Swap(props: NodeProps) {
  return <Shape {...SWAP} {...props} _style={extendStyle(SWAP, props)} />
}
