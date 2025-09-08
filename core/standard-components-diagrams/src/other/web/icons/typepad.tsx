import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TYPEPAD = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.typepad;fillColor=#CBD372;gradientColor=#818748',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Typepad(props: DiagramNodeProps) {
  return <Shape {...TYPEPAD} {...props} _style={extendStyle(TYPEPAD, props)} />
}
