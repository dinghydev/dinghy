import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CCC_CLOUD_CALL_CENTER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ccc_cloud_call_center;',
  _width: 53.7,
  _height: 52.2,
}

export function CccCloudCallCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CCC_CLOUD_CALL_CENTER}
      {...props}
      _style={extendStyle(CCC_CLOUD_CALL_CENTER, props)}
    />
  )
}
