import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONE_STRAINER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.cone_strainer;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function ConeStrainer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONE_STRAINER)} />
}
