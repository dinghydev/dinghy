import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POS = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/security/POS.svg;strokeColor=none;',
  _width: 67.8,
  _height: 72,
}

export function Pos(props: DiagramNodeProps) {
  return <Shape {...POS} {...props} _style={extendStyle(POS, props)} />
}
