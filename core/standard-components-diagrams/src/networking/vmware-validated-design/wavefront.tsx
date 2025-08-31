import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAVEFRONT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.wavefront;',
  _width: 43,
  _height: 50,
}

export function Wavefront(props: DiagramNodeProps) {
  return (
    <Shape {...WAVEFRONT} {...props} _style={extendStyle(WAVEFRONT, props)} />
  )
}
