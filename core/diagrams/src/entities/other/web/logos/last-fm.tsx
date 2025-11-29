import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LAST_FM = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.last.fm;fillColor=#F33543;gradientColor=#BD0E11',
  },
  _width: 83.2,
  _height: 50,
}

export function LastFm(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LAST_FM)} />
}
