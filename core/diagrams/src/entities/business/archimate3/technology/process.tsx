import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROCESS = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.process;',
  },
  _width: 70,
  _height: 35,
}

export function Process(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROCESS)} />
}
