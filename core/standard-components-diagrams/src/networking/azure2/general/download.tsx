import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOWNLOAD = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Download.svg;strokeColor=none;',
  _width: 64,
  _height: 67,
}

export function Download(props: DiagramNodeProps) {
  return <Shape {...DOWNLOAD} {...props} />
}
