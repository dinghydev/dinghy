import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_CLUSTERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Virtual_Clusters.svg;',
  _width: 66,
  _height: 64,
}

export function VirtualClusters(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_CLUSTERS} {...props} />
}
