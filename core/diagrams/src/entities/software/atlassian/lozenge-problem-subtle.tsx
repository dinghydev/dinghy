import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOZENGE_PROBLEM_SUBTLE = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;strokeColor=#BA3200;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#BA3200',
  },
  _width: 70,
  _height: 20,
}

export function LozengeProblemSubtle(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, LOZENGE_PROBLEM_SUBTLE)} />
  )
}
