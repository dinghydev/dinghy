import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MY_SITE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.my_site;',
  },
  _original_width: 58,
  _original_height: 49,
}

export function MySite(props: NodeProps) {
  return <Shape {...MY_SITE} {...props} _style={extendStyle(MY_SITE, props)} />
}
