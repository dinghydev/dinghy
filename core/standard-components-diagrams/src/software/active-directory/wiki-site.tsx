import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WIKI_SITE = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/wiki_site.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function WikiSite(props: DiagramNodeProps) {
  return (
    <Shape {...WIKI_SITE} {...props} _style={extendStyle(WIKI_SITE, props)} />
  )
}
