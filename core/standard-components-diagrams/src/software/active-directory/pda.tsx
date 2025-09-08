import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PDA = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/pda.svg;strokeColor=none;',
  },
  _original_width: 27,
  _original_height: 50,
}

export function Pda(props: DiagramNodeProps) {
  return <Shape {...PDA} {...props} _style={extendStyle(PDA, props)} />
}
