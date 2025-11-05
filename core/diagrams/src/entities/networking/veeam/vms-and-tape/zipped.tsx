import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ZIPPED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.zipped;pointerEvents=1;',
  },
  _width: 6.8,
  _height: 57.2,
}

export function Zipped(props: NodeProps) {
  return <Shape {...ZIPPED} {...props} _style={extendStyle(ZIPPED, props)} />
}
