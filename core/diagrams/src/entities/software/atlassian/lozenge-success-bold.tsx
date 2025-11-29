import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOZENGE_SUCCESS_BOLD = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;fillColor=#008364;strokeColor=#008364;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#ffffff',
  },
  _width: 70,
  _height: 20,
}

export function LozengeSuccessBold(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOZENGE_SUCCESS_BOLD)} />
}
