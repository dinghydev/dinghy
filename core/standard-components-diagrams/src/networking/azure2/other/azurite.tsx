import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURITE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azurite.svg;',
  _width: 68,
  _height: 66,
}

export function Azurite(props: DiagramNodeProps) {
  return <Shape {...AZURITE} {...props} />
}
