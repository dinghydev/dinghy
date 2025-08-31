import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAMMOGRAM = {
  _style:
    'shape=mxgraph.signs.healthcare.mammogram;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function Mammogram(props: DiagramNodeProps) {
  return (
    <Shape {...MAMMOGRAM} {...props} _style={extendStyle(MAMMOGRAM, props)} />
  )
}
