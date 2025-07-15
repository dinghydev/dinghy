import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STREAM_ANALYTICS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Stream_Analytics.svg;',
  _width: 50,
  _height: 39,
}

export function StreamAnalytics(props: DiagramNodeProps) {
  return <Shape {...STREAM_ANALYTICS} {...props} />
}
