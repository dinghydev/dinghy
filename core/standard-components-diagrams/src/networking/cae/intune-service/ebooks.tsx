import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EBOOKS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/eBooks.svg;',
  _width: 50,
  _height: 41,
}

export function Ebooks(props: DiagramNodeProps) {
  return <Shape {...EBOOKS} {...props} />
}
