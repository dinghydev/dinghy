import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.network;',
  },
  _original_width: 48.19,
  _original_height: 50,
}

export function Network(props: NodeProps) {
  return <Shape {...NETWORK} {...props} _style={extendStyle(NETWORK, props)} />
}
