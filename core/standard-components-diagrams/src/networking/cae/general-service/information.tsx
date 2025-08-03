import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INFORMATION = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Info_2.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function Information(props: DiagramNodeProps) {
  return <Shape {...INFORMATION} {...props} />
}
