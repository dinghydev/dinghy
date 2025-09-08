import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LINK = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.link;',
  },
  _original_width: 61,
  _original_height: 21,
}

export function Link(props: DiagramNodeProps) {
  return <Shape {...LINK} {...props} _style={extendStyle(LINK, props)} />
}
