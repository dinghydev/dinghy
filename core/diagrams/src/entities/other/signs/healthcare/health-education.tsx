import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEALTH_EDUCATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.health_education;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function HealthEducation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HEALTH_EDUCATION)} />
}
