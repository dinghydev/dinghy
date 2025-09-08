import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HDI_AKS_CLUSTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/HDI_AKS_Cluster.svg;strokeColor=none;',
  },
  _original_width: 60.440000000000005,
  _original_height: 68,
}

export function HdiAksCluster(props: DiagramNodeProps) {
  return (
    <Shape
      {...HDI_AKS_CLUSTER}
      {...props}
      _style={extendStyle(HDI_AKS_CLUSTER, props)}
    />
  )
}
