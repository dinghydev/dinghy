import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIMEO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.vimeo;fillColor=#1AB7EA;strokeColor=none',
  },
  _original_width: 62.6,
  _original_height: 58,
}

export function Vimeo(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIMEO)} />
}
