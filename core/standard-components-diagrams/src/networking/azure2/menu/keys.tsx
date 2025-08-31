import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEYS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/menu/Keys.svg;strokeColor=none;',
  },
  _width: 64,
  _height: 68,
}

export function Keys(props: DiagramNodeProps) {
  return <Shape {...KEYS} {...props} _style={extendStyle(KEYS, props)} />
}
