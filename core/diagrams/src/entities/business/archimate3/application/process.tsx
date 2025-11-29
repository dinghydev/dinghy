import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROCESS = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.process;',
  },
  _width: 60,
  _height: 30,
}

export function Process(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROCESS)} />
}
