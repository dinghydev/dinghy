import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SES = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.ses;fillColor=#D9A741;gradientColor=none;',
  _width: 79.5,
  _height: 93,
}

export function Ses(props: DiagramNodeProps) {
  return <Shape {...SES} {...props} />
}
