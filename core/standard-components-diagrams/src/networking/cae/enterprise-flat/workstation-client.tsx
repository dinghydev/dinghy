import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKSTATION_CLIENT = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.workstation_client',
  _width: 60,
  _height: 60,
}

export function WorkstationClient(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKSTATION_CLIENT}
      {...props}
      _style={extendStyle(WORKSTATION_CLIENT, props)}
    />
  )
}
