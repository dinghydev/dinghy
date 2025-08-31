import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFORMATION = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Info_2.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Information(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFORMATION}
      {...props}
      _style={extendStyle(INFORMATION, props)}
    />
  )
}
