import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLASSIC_STORAGE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/ClassicStorage.svg;',
  _width: 50,
  _height: 43,
}

export function ClassicStorage(props: DiagramNodeProps) {
  return <Shape {...CLASSIC_STORAGE} {...props} />
}
