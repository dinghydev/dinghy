import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEDIA = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Media.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function Media(props: DiagramNodeProps) {
  return <Shape {...MEDIA} {...props} />
}
