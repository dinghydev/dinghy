import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WIKI_SITE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.wiki_site;',
  _width: 59,
  _height: 50,
}

export function WikiSite(props: DiagramNodeProps) {
  return <Shape {...WIKI_SITE} {...props} />
}
