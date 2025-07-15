import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INFORMATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Information.svg;',
  _width: 64,
  _height: 64,
}

export function Information(props: DiagramNodeProps) {
  return <Shape {...INFORMATION} {...props} />
}
