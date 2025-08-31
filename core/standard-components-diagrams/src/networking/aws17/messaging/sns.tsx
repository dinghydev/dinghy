import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SNS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sns;fillColor=#D9A741;gradientColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Sns(props: DiagramNodeProps) {
  return <Shape {...SNS} {...props} _style={extendStyle(SNS, props)} />
}
