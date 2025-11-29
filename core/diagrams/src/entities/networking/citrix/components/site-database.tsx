import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SITE_DATABASE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.site_database;',
  },
  _original_width: 45.395,
  _original_height: 50,
}

export function SiteDatabase(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SITE_DATABASE)} />
}
