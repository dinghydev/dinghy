import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COUNTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Counter.svg;strokeColor=none;',
  _width: 64,
  _height: 52,
}

export function Counter(props: DiagramNodeProps) {
  return <Shape {...COUNTER} {...props} _style={extendStyle(COUNTER, props)} />
}
