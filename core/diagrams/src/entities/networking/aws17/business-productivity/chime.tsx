import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHIME = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.chime;fillColor=#03B5BB;gradientColor=none;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function Chime(props: NodeProps) {
  return <Shape {...CHIME} {...props} _style={extendStyle(CHIME, props)} />
}
