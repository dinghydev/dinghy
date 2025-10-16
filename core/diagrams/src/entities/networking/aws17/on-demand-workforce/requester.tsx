import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REQUESTER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.requester;fillColor=#ACACAC;gradientColor=none;',
  },
  _original_width: 55.5,
  _original_height: 64.5,
}

export function Requester(props: DiagramNodeProps) {
  return (
    <Shape {...REQUESTER} {...props} _style={extendStyle(REQUESTER, props)} />
  )
}
