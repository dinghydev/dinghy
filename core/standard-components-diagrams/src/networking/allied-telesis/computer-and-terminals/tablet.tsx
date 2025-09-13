import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLET = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Tablet.svg;strokeColor=none;',
  },
  _width: 27,
  _height: 57,
}

export function Tablet(props: DiagramNodeProps) {
  return <Shape {...TABLET} {...props} _style={extendStyle(TABLET, props)} />
}
