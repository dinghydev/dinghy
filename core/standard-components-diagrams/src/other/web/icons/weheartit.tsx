import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEHEARTIT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.weheartit;fillColor=#FF7AA2;gradientColor=#FF4577',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Weheartit(props: DiagramNodeProps) {
  return (
    <Shape {...WEHEARTIT} {...props} _style={extendStyle(WEHEARTIT, props)} />
  )
}
