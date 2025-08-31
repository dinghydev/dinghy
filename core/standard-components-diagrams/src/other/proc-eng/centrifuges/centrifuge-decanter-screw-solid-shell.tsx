import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTRIFUGE_DECANTER_SCREW_SOLID_SHELL = {
  _style: {
    entity:
      'shape=mxgraph.pid.centrifuges.centrifuge,_decanter_(screw,_solid_shell);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 110,
  _height: 100,
}

export function CentrifugeDecanterScrewSolidShell(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRIFUGE_DECANTER_SCREW_SOLID_SHELL}
      {...props}
      _style={extendStyle(CENTRIFUGE_DECANTER_SCREW_SOLID_SHELL, props)}
    />
  )
}
