import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APARTMENTS = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Apartments.svg;strokeColor=none;',
  _width: 54,
  _height: 105,
}

export function Apartments(props: DiagramNodeProps) {
  return <Shape {...APARTMENTS} {...props} />
}
