import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILESHARE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Azure_Fileshare.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function Fileshare(props: DiagramNodeProps) {
  return <Shape {...FILESHARE} {...props} />
}
