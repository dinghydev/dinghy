import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLET_ALTERNATIVE = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Tablet_Alternative.svg;',
  _width: 34.8,
  _height: 48,
}

export function TabletAlternative(props: DiagramNodeProps) {
  return <Shape {...TABLET_ALTERNATIVE} {...props} />
}
