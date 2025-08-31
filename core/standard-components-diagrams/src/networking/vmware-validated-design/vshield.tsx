import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VSHIELD = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vshield;',
  _width: 42.5,
  _height: 50,
}

export function Vshield(props: DiagramNodeProps) {
  return <Shape {...VSHIELD} {...props} _style={extendStyle(VSHIELD, props)} />
}
