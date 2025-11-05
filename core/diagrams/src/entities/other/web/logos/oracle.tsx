import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ORACLE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.oracle;fillColor=#FF0000;strokeColor=none',
  },
  _width: 90,
  _height: 23,
}

export function Oracle(props: NodeProps) {
  return <Shape {...ORACLE} {...props} _style={extendStyle(ORACLE, props)} />
}
