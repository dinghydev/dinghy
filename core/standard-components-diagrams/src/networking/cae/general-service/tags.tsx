import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAGS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Tags.svg;',
  _width: 42,
  _height: 50,
}

export function Tags(props: DiagramNodeProps) {
  return <Shape {...TAGS} {...props} />
}
