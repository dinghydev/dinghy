import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALIBABA_CLOUD_LOGO_CHINESE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.alibaba_cloud_logo_chinese;',
  },
  _width: 153.6,
  _height: 34.199999999999996,
}

export function AlibabaCloudLogoChinese(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALIBABA_CLOUD_LOGO_CHINESE}
      {...props}
      _style={extendStyle(ALIBABA_CLOUD_LOGO_CHINESE, props)}
    />
  )
}
