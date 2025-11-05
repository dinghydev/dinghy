import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTRACT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=contract;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function Contract(props: NodeProps) {
  return (
    <Shape {...CONTRACT} {...props} _style={extendStyle(CONTRACT, props)} />
  )
}
