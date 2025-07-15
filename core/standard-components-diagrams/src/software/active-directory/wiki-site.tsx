import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WIKI_SITE = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/wiki_site.svg;',
  _width: 50,
  _height: 50,
}

export function WikiSite(props: DiagramNodeProps) {
  return <Shape {...WIKI_SITE} {...props} />
}
