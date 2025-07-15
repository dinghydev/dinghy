import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESOURCE_GRAPH_EXPLORER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Resource_Graph_Explorer.svg;',
  _width: 67,
  _height: 64,
}

export function ResourceGraphExplorer(props: DiagramNodeProps) {
  return <Shape {...RESOURCE_GRAPH_EXPLORER} {...props} />
}
