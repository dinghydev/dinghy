import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOSPITAL_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.hospital_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 85,
  _original_height: 98,
}

export function Hospital2(props: DiagramNodeProps) {
  return (
    <Shape {...HOSPITAL_2} {...props} _style={extendStyle(HOSPITAL_2, props)} />
  )
}
