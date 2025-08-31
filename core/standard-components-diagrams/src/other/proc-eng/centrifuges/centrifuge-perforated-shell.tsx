import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTRIFUGE_PERFORATED_SHELL = {
  _style:
    'shape=mxgraph.pid.centrifuges.centrifuge_(perforated_shell);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 110,
}

export function CentrifugePerforatedShell(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRIFUGE_PERFORATED_SHELL}
      {...props}
      _style={extendStyle(CENTRIFUGE_PERFORATED_SHELL, props)}
    />
  )
}
