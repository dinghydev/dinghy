import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ONCOLOGY = {
  _style:
    'shape=mxgraph.signs.healthcare.oncology;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function Oncology(props: DiagramNodeProps) {
  return (
    <Shape {...ONCOLOGY} {...props} _style={extendStyle(ONCOLOGY, props)} />
  )
}
