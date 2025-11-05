import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROCESS_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.process;',
  },
  _width: 60,
  _height: 35,
}

export function Process2(props: NodeProps) {
  return (
    <Shape {...PROCESS_2} {...props} _style={extendStyle(PROCESS_2, props)} />
  )
}
