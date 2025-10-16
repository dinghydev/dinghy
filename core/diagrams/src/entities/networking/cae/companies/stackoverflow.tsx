import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STACKOVERFLOW = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/StackOverflow.svg;strokeColor=none;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function Stackoverflow(props: DiagramNodeProps) {
  return (
    <Shape
      {...STACKOVERFLOW}
      {...props}
      _style={extendStyle(STACKOVERFLOW, props)}
    />
  )
}
