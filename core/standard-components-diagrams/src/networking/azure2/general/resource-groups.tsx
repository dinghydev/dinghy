import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESOURCE_GROUPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Resource_Groups.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 64,
}

export function ResourceGroups(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESOURCE_GROUPS}
      {...props}
      _style={extendStyle(RESOURCE_GROUPS, props)}
    />
  )
}
