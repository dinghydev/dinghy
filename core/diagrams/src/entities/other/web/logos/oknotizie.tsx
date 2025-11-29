import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OKNOTIZIE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.oknotizie',
  },
  _width: 47.400000000000006,
  _height: 70.4,
}

export function Oknotizie(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OKNOTIZIE)} />
}
