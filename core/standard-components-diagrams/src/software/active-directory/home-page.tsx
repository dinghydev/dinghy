import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOME_PAGE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/home_page.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function HomePage(props: DiagramNodeProps) {
  return (
    <Shape {...HOME_PAGE} {...props} _style={extendStyle(HOME_PAGE, props)} />
  )
}
