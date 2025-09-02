import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOME = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/home.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48.5,
}

export function Home(props: DiagramNodeProps) {
  return <Shape {...HOME} {...props} _style={extendStyle(HOME, props)} />
}
