import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HDI_AKS_CLUSTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/HDI_AKS_Cluster.svg;strokeColor=none;',
  _width: 60.440000000000005,
  _height: 68,
}

export function HdiAksCluster(props: DiagramNodeProps) {
  return <Shape {...HDI_AKS_CLUSTER} {...props} />
}
