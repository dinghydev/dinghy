import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SITE_DATABASE = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.site_database;',
  _width: 45.395,
  _height: 50,
}

export function SiteDatabase(props: DiagramNodeProps) {
  return <Shape {...SITE_DATABASE} {...props} />
}
