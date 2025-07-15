import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UCMA_APPLICATION = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.ucma_application;',
  _width: 53,
  _height: 40,
}

export function UcmaApplication(props: DiagramNodeProps) {
  return <Shape {...UCMA_APPLICATION} {...props} />
}
