import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIDEO_ANALYZERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Video_Analyzers.svg;strokeColor=none;',
  _width: 68,
  _height: 48.44,
}

export function VideoAnalyzers(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIDEO_ANALYZERS}
      {...props}
      _style={extendStyle(VIDEO_ANALYZERS, props)}
    />
  )
}
