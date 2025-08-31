import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNET_GLOBE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/internet_globe.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
