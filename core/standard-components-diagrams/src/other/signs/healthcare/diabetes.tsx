import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIABETES = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.diabetes;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 55,
}

export function Diabetes(props: DiagramNodeProps) {
  return (
    <Shape {...DIABETES} {...props} _style={extendStyle(DIABETES, props)} />
  )
}
