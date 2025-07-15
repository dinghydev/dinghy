import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQS = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.sqs;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 184,
  _height: 212.75,
}

export function Sqs(props: DiagramNodeProps) {
  return <Shape {...SQS} {...props} />
}
