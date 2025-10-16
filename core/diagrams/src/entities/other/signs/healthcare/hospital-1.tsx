import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HOSPITAL_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.hospital_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Hospital1(props: DiagramNodeProps) {
  return (
    <Shape {...HOSPITAL_1} {...props} _style={extendStyle(HOSPITAL_1, props)} />
  )
}
