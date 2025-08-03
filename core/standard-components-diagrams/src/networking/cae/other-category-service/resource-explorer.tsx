import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESOURCE_EXPLORER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Resource_Explorer.svg;strokeColor=none;',
  _width: 50,
  _height: 46,
}

export function ResourceExplorer(props: DiagramNodeProps) {
  return <Shape {...RESOURCE_EXPLORER} {...props} />
}
