import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GABBR = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.gabbr;fillColor=#F05B1E',
  },
  _original_width: 64.4,
  _original_height: 66,
}

export function Gabbr(props: NodeProps) {
  return <Shape {...GABBR} {...props} _style={extendStyle(GABBR, props)} />
}
