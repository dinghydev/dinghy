import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COUNTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Counter.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 52,
}

export function Counter(props: DiagramNodeProps) {
  return <Shape {...COUNTER} {...props} _style={extendStyle(COUNTER, props)} />
}
