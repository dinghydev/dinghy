import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DCDN_DYNAMIC_ROUTE_FOR_CDN = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dcdn_dynamic_route_for_cdn;',
  },
  _width: 46.5,
  _height: 54.900000000000006,
}

export function DcdnDynamicRouteForCdn(props: DiagramNodeProps) {
  return (
    <Shape
      {...DCDN_DYNAMIC_ROUTE_FOR_CDN}
      {...props}
      _style={extendStyle(DCDN_DYNAMIC_ROUTE_FOR_CDN, props)}
    />
  )
}
