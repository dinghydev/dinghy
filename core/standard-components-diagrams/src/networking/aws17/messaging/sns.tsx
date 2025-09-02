import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SNS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sns;fillColor=#D9A741;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 76.5,
}

export function Sns(props: DiagramNodeProps) {
  return <Shape {...SNS} {...props} _style={extendStyle(SNS, props)} />
}
