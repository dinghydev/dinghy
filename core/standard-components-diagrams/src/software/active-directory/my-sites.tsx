import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MY_SITES = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/my_sites.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 45,
}

export function MySites(props: DiagramNodeProps) {
  return (
    <Shape {...MY_SITES} {...props} _style={extendStyle(MY_SITES, props)} />
  )
}
