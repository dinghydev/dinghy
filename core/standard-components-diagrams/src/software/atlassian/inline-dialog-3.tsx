import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INLINE_DIALOG_3 = {
  _style: {
    entity:
      'rounded=1;fillColor=none;strokeColor=none;shadow=0;html=1;arcSize=50;fontSize=12;align=left;verticalAlign=middle;spacingLeft=10',
  },
  _original_width: 1,
  _original_height: 450,
}

export function InlineDialog3(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_DIALOG_3}
      {...props}
      _style={extendStyle(INLINE_DIALOG_3, props)}
    />
  )
}
