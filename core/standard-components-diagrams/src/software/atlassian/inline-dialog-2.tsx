import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INLINE_DIALOG_2 = {
  _style: {
    entity:
      'rounded=1;fillColor=#DEE1E6;strokeColor=none;shadow=0;html=1;arcSize=50;fontSize=12;align=center;verticalAlign=middle',
  },
  _width: 340,
  _height: 450,
}

export function InlineDialog2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_DIALOG_2}
      {...props}
      _style={extendStyle(INLINE_DIALOG_2, props)}
    />
  )
}
