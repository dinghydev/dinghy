import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESOURCE_GROUPS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/ResourceGroup.svg;',
  _width: 50,
  _height: 40,
}

export function ResourceGroups(props: DiagramNodeProps) {
  return <Shape {...RESOURCE_GROUPS} {...props} />
}
