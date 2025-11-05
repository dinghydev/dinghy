import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTRACT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.contract;',
  },
  _width: 70,
  _height: 40,
}

export function Contract2(props: NodeProps) {
  return (
    <Shape {...CONTRACT_2} {...props} _style={extendStyle(CONTRACT_2, props)} />
  )
}
