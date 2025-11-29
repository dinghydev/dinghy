import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAPE_CHECKED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.tape_checked;',
  },
  _original_width: 70,
  _original_height: 58,
}

export function TapeChecked(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TAPE_CHECKED)} />
}
