import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIRST_AID = {
  _style:
    'shape=mxgraph.signs.healthcare.first_aid;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function FirstAid(props: DiagramNodeProps) {
  return (
    <Shape {...FIRST_AID} {...props} _style={extendStyle(FIRST_AID, props)} />
  )
}
