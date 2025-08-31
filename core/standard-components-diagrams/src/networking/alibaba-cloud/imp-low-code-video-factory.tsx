import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMP_LOW_CODE_VIDEO_FACTORY = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.imp_low_code_video_factory;',
  _width: 48,
  _height: 48.6,
}

export function ImpLowCodeVideoFactory(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMP_LOW_CODE_VIDEO_FACTORY}
      {...props}
      _style={extendStyle(IMP_LOW_CODE_VIDEO_FACTORY, props)}
    />
  )
}
