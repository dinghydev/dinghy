import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RESOURCE_GRAPH_EXPLORER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Resource_Graph_Explorer.svg;',
  _width: 49,
  _height: 50,
}

export function ResourceGraphExplorer(props: DiagramNodeProps) {
  return <Shape {...RESOURCE_GRAPH_EXPLORER} {...props} />
}
