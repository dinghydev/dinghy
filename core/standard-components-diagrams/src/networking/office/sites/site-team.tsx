import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SITE_TEAM = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.site_team;',
  _width: 60,
  _height: 49,
}

export function SiteTeam(props: DiagramNodeProps) {
  return <Shape {...SITE_TEAM} {...props} />
}
