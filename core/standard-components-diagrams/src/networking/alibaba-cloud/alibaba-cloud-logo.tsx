import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALIBABA_CLOUD_LOGO = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.alibaba_cloud_logo;',
  },
  _width: 96.60000000000001,
  _height: 60,
}

export function AlibabaCloudLogo(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALIBABA_CLOUD_LOGO}
      {...props}
      _style={extendStyle(ALIBABA_CLOUD_LOGO, props)}
    />
  )
}
