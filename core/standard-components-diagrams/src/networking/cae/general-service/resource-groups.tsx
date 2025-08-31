import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESOURCE_GROUPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/ResourceGroup.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 40,
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
