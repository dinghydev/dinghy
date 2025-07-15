import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CERTIFICATE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.certificate;pointerEvents=1;',
  _width: 50,
  _height: 40,
}

export function Certificate(props: DiagramNodeProps) {
  return <Shape {...CERTIFICATE} {...props} />
}
