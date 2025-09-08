import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLASSIC_STORAGE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/ClassicStorage.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 43,
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
