import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ODNOKLASSNIKI = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.odnoklassniki;fillColor=#FDE15A;gradientColor=#F24317',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Odnoklassniki(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ODNOKLASSNIKI)} />
}
