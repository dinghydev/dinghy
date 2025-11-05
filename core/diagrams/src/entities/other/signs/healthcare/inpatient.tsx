import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INPATIENT = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.inpatient;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 96,
  _original_height: 98,
}

export function Inpatient(props: NodeProps) {
  return (
    <Shape {...INPATIENT} {...props} _style={extendStyle(INPATIENT, props)} />
  )
}
