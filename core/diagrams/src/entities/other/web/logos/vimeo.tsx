import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIMEO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.vimeo;fillColor=#1AB7EA;strokeColor=none',
  },
  _original_width: 62.6,
  _original_height: 58,
}

export function Vimeo(props: DiagramNodeProps) {
  return <Shape {...VIMEO} {...props} _style={extendStyle(VIMEO, props)} />
}
