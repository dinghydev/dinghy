import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKMAIL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.workmail;fillColor=#D16A28;gradientColor=#F58435;gradientDirection=north;',
  },
  _original_width: 82.5,
  _original_height: 94.5,
}

export function Workmail(props: DiagramNodeProps) {
  return (
    <Shape {...WORKMAIL} {...props} _style={extendStyle(WORKMAIL, props)} />
  )
}
