import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLASSIC_STORAGE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/ClassicStorage.svg;strokeColor=none;',
  _width: 50,
  _height: 43,
}

export function ClassicStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLASSIC_STORAGE}
      {...props}
      _style={extendStyle(CLASSIC_STORAGE, props)}
    />
  )
}
