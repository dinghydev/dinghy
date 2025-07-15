import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CENTRIFUGE_SCREW_PERFORATED_SHELL = {
  _style:
    'shape=mxgraph.pid.centrifuges.centrifuge_(screw,_perforated_shell);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 110,
  _height: 100,
}

export function CentrifugeScrewPerforatedShell(props: DiagramNodeProps) {
  return <Shape {...CENTRIFUGE_SCREW_PERFORATED_SHELL} {...props} />
}
