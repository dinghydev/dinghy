import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLET_ALTERNATIVE = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Tablet_Alternative.svg;strokeColor=none;',
  },
  _width: 34.8,
  _height: 48,
}

export function TabletAlternative(props: NodeProps) {
  return (
    <Shape
      {...TABLET_ALTERNATIVE}
      {...props}
      _style={extendStyle(TABLET_ALTERNATIVE, props)}
    />
  )
}
