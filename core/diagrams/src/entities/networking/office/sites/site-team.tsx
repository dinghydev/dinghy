import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SITE_TEAM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.site_team;',
  },
  _original_width: 60,
  _original_height: 49,
}

export function SiteTeam(props: DiagramNodeProps) {
  return (
    <Shape {...SITE_TEAM} {...props} _style={extendStyle(SITE_TEAM, props)} />
  )
}
