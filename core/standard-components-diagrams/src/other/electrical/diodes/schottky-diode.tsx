import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCHOTTKY_DIODE = {
  _style:
    'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.schottky_diode;',
  _width: 100,
  _height: 60,
}

export function SchottkyDiode(props: DiagramNodeProps) {
  return <Shape {...SCHOTTKY_DIODE} {...props} />
}
