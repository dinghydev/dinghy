import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERNET_GLOBE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/internet_globe.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function InternetGlobe(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNET_GLOBE}
      {...props}
      _style={extendStyle(INTERNET_GLOBE, props)}
    />
  )
}
