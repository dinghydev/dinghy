import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VARACTOR_VARICAP = {
  _style:
    'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.varactor_-_varicap;',
  _width: 100,
  _height: 60,
}

export function VaractorVaricap(props: DiagramNodeProps) {
  return (
    <Shape
      {...VARACTOR_VARICAP}
      {...props}
      _style={extendStyle(VARACTOR_VARICAP, props)}
    />
  )
}
