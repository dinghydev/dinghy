import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UIS_ULTIMATE_INTERNET_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.uis_ultimate_internet_service;',
  _width: 54.900000000000006,
  _height: 54,
}

export function UisUltimateInternetService(props: DiagramNodeProps) {
  return (
    <Shape
      {...UIS_ULTIMATE_INTERNET_SERVICE}
      {...props}
      _style={extendStyle(UIS_ULTIMATE_INTERNET_SERVICE, props)}
    />
  )
}
