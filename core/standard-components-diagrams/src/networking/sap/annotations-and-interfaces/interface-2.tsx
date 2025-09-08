import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERFACE_2 = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#475f75;fillColor=default;strokeWidth=1.5;',
  },
  _original_width: 57,
  _original_height: 16,
}

export function Interface2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERFACE_2}
      {...props}
      _style={extendStyle(INTERFACE_2, props)}
    />
  )
}
