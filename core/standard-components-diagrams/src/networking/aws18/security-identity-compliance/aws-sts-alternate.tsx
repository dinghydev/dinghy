import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AWS_STS_ALTERNATE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.sts_alternate;',
  _width: 60,
  _height: 60,
}

export function AwsStsAlternate(props: DiagramNodeProps) {
  return <Shape {...AWS_STS_ALTERNATE} {...props} />
}
