import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLOG_SITE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.blog_site;',
  _width: 56,
  _height: 49,
}

export function BlogSite(props: DiagramNodeProps) {
  return (
    <Shape {...BLOG_SITE} {...props} _style={extendStyle(BLOG_SITE, props)} />
  )
}
