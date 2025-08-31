import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUB_SITE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/sub_site.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 43,
}

export function SubSite(props: DiagramNodeProps) {
  return (
    <Shape {...SUB_SITE} {...props} _style={extendStyle(SUB_SITE, props)} />
  )
}
