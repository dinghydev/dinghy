import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STACKOVERFLOW = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/StackOverflow.svg;strokeColor=none;',
  },
  _width: 40,
  _height: 50,
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
