import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTRIFUGE_SOLID_SHELL = {
  _style: {
    entity:
      'shape=mxgraph.pid.centrifuges.centrifuge_(solid_shell);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 110,
}

export function CentrifugeSolidShell(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRIFUGE_SOLID_SHELL}
      {...props}
      _style={extendStyle(CENTRIFUGE_SOLID_SHELL, props)}
    />
  )
}
