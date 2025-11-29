import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOZENGE_SUCCESS_SUBTLE = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;strokeColor=#008364;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#008364',
  },
  _width: 70,
  _height: 20,
}

export function LozengeSuccessSubtle(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, LOZENGE_SUCCESS_SUBTLE)} />
  )
}
