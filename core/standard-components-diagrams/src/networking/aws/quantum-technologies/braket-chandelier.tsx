import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BRAKET_CHANDELIER = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.braket_chandelier;',
  _width: 53,
  _height: 78,
}

export function BraketChandelier(props: DiagramNodeProps) {
  return (
    <Shape
      {...BRAKET_CHANDELIER}
      {...props}
      _style={extendStyle(BRAKET_CHANDELIER, props)}
    />
  )
}
