import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MY_SITE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.my_site;',
  },
  _width: 58,
  _height: 49,
}

export function MySite(props: DiagramNodeProps) {
  return <Shape {...MY_SITE} {...props} _style={extendStyle(MY_SITE, props)} />
}
