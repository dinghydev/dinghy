import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAGS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Tags.svg;strokeColor=none;',
  _width: 60,
  _height: 65,
}

export function Tags(props: DiagramNodeProps) {
  return <Shape {...TAGS} {...props} />
}
