import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STREAM_ANALYTICS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Stream_Analytics.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 39,
}

export function StreamAnalytics(props: DiagramNodeProps) {
  return (
    <Shape
      {...STREAM_ANALYTICS}
      {...props}
      _style={extendStyle(STREAM_ANALYTICS, props)}
    />
  )
}
