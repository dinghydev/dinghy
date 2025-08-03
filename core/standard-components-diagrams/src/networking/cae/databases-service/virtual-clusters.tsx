import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_CLUSTERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Clusters.svg;strokeColor=none;',
  _width: 50,
  _height: 48,
}

export function VirtualClusters(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_CLUSTERS} {...props} />
}
