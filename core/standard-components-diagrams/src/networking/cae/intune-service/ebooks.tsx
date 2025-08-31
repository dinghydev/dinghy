import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EBOOKS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/eBooks.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 41,
}

export function Ebooks(props: DiagramNodeProps) {
  return <Shape {...EBOOKS} {...props} _style={extendStyle(EBOOKS, props)} />
}
