import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTENSIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Extensions.svg;strokeColor=none;',
  },
  _width: 65,
  _height: 64,
}

export function Extensions(props: DiagramNodeProps) {
  return (
    <Shape {...EXTENSIONS} {...props} _style={extendStyle(EXTENSIONS, props)} />
  )
}
