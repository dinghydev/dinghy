import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SQS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sqs;fillColor=#D9A741;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function Sqs(props: DiagramNodeProps) {
  return <Shape {...SQS} {...props} _style={extendStyle(SQS, props)} />
}
