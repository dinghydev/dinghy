import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALIBABA_CLOUD_LOGO_ENGLISH = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.alibaba_cloud_logo_english;',
  },
  _width: 154.8,
  _height: 19.5,
}

export function AlibabaCloudLogoEnglish(props: NodeProps) {
  return (
    <Shape
      {...ALIBABA_CLOUD_LOGO_ENGLISH}
      {...props}
      _style={extendStyle(ALIBABA_CLOUD_LOGO_ENGLISH, props)}
    />
  )
}
