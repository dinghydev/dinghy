import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIDEO_ANALYZERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Video_Analyzers.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 48.44,
}

export function VideoAnalyzers(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIDEO_ANALYZERS)} />
}
