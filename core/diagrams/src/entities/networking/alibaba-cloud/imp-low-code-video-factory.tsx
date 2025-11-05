import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMP_LOW_CODE_VIDEO_FACTORY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.imp_low_code_video_factory;',
  },
  _original_width: 48,
  _original_height: 48.6,
}

export function ImpLowCodeVideoFactory(props: NodeProps) {
  return (
    <Shape
      {...IMP_LOW_CODE_VIDEO_FACTORY}
      {...props}
      _style={extendStyle(IMP_LOW_CODE_VIDEO_FACTORY, props)}
    />
  )
}
