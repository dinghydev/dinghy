import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESOURCE_EXPLORER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Resource_Explorer.svg;',
  _width: 68,
  _height: 56.00000000000001,
}

export function ResourceExplorer(props: DiagramNodeProps) {
  return <Shape {...RESOURCE_EXPLORER} {...props} />
}
