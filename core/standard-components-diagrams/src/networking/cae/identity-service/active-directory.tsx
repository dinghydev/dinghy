import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTIVE_DIRECTORY = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Active_Directory.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ActiveDirectory(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTIVE_DIRECTORY}
      {...props}
      _style={extendStyle(ACTIVE_DIRECTORY, props)}
    />
  )
}
