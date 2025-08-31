import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALL_RESOURCES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/All_Resources.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AllResources(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALL_RESOURCES}
      {...props}
      _style={extendStyle(ALL_RESOURCES, props)}
    />
  )
}
