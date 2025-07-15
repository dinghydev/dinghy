import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHOTO_RESISTOR_2 = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.photo_resistor_2;pointerEvents=1;',
  _width: 100,
  _height: 50,
}

export function PhotoResistor2(props: DiagramNodeProps) {
  return <Shape {...PHOTO_RESISTOR_2} {...props} />
}
