import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HYBRID = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.hybrid',
  _width: 50,
  _height: 39,
}

export function Hybrid(props: DiagramNodeProps) {
  return <Shape {...HYBRID} {...props} _style={extendStyle(HYBRID, props)} />
}
