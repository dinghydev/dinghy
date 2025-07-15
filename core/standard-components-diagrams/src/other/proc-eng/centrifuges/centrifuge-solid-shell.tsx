import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CENTRIFUGE_SOLID_SHELL = {
  _style:
    'shape=mxgraph.pid.centrifuges.centrifuge_(solid_shell);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 110,
}

export function CentrifugeSolidShell(props: DiagramNodeProps) {
  return <Shape {...CENTRIFUGE_SOLID_SHELL} {...props} />
}
