import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RECIPIENT_LIST = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.recipient_list;',
  },
  _width: 150,
  _height: 90,
}

export function RecipientList(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RECIPIENT_LIST)} />
}
