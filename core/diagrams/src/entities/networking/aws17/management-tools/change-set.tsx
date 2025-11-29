import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHANGE_SET = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.change_set;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 55.5,
  _original_height: 64.5,
}

export function ChangeSet(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHANGE_SET)} />
}
