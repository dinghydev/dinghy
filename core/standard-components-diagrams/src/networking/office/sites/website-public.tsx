import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEBSITE_PUBLIC = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.website_public;',
  },
  _width: 58,
  _height: 48,
}

export function WebsitePublic(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEBSITE_PUBLIC}
      {...props}
      _style={extendStyle(WEBSITE_PUBLIC, props)}
    />
  )
}
