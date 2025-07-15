import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CERTIFICATE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.certificate;fillColor=#5294CF;gradientColor=none;',
  _width: 63,
  _height: 85.5,
}

export function Certificate(props: DiagramNodeProps) {
  return <Shape {...CERTIFICATE} {...props} />
}
