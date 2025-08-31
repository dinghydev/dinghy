import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEBSITE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.website;',
  },
  _width: 59,
  _height: 49,
}

export function Website(props: DiagramNodeProps) {
  return <Shape {...WEBSITE} {...props} _style={extendStyle(WEBSITE, props)} />
}
