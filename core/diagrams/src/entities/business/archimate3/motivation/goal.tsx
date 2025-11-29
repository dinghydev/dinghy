import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GOAL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.application;appType=goal;archiType=oct;',
  },
  _width: 150,
  _height: 75,
}

export function Goal(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GOAL)} />
}
