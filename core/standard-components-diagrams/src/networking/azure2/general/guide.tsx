import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GUIDE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Guide.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Guide(props: DiagramNodeProps) {
  return <Shape {...GUIDE} {...props} _style={extendStyle(GUIDE, props)} />
}
