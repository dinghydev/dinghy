import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESOURCE_GUARD = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Resource_Guard.svg;strokeColor=none;',
  _width: 56.64,
  _height: 68,
}

export function ResourceGuard(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESOURCE_GUARD}
      {...props}
      _style={extendStyle(RESOURCE_GUARD, props)}
    />
  )
}
