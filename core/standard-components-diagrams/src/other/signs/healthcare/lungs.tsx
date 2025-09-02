import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LUNGS = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.lungs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 91,
  _original_height: 99,
}

export function Lungs(props: DiagramNodeProps) {
  return <Shape {...LUNGS} {...props} _style={extendStyle(LUNGS, props)} />
}
