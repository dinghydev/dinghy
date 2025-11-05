import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const XERPI = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.xerpi;fillColor=#7F719B;gradientColor=#32264B;strokeColor=none',
  },
  _original_width: 70.2,
  _original_height: 65.60000000000001,
}

export function Xerpi(props: NodeProps) {
  return <Shape {...XERPI} {...props} _style={extendStyle(XERPI, props)} />
}
