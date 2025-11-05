import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HATENA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.hatena',
  },
  _width: 86.2,
  _height: 44.2,
}

export function Hatena(props: NodeProps) {
  return <Shape {...HATENA} {...props} _style={extendStyle(HATENA, props)} />
}
