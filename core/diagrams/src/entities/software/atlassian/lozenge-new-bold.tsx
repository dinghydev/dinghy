import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOZENGE_NEW_BOLD = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;fillColor=#6554C0;strokeColor=#6554C0;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#ffffff',
  },
  _width: 50,
  _height: 20,
}

export function LozengeNewBold(props: NodeProps) {
  return (
    <Shape
      {...LOZENGE_NEW_BOLD}
      {...props}
      _style={extendStyle(LOZENGE_NEW_BOLD, props)}
    />
  )
}
