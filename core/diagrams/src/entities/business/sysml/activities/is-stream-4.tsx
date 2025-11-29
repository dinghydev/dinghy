import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IS_STREAM_4 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.isActStream;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 100,
}

export function IsStream4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IS_STREAM_4)} />
}
