import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAGNOSTICS = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.diagnostics',
  _width: 50,
  _height: 34,
}

export function Diagnostics(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIAGNOSTICS}
      {...props}
      _style={extendStyle(DIAGNOSTICS, props)}
    />
  )
}
