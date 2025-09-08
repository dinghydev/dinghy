import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIMEO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.vimeo;fillColor=#A4EDF9;gradientColor=#2B8ED9',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Vimeo(props: DiagramNodeProps) {
  return <Shape {...VIMEO} {...props} _style={extendStyle(VIMEO, props)} />
}
