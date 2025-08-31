import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKMAIL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.workmail;fillColor=#D16A28;gradientColor=#F58435;gradientDirection=north;',
  },
  _width: 82.5,
  _height: 94.5,
}

export function Workmail(props: DiagramNodeProps) {
  return (
    <Shape {...WORKMAIL} {...props} _style={extendStyle(WORKMAIL, props)} />
  )
}
