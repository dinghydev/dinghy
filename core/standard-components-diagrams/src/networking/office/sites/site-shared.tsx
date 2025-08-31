import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SITE_SHARED = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.site_shared;',
  _width: 56,
  _height: 50,
}

export function SiteShared(props: DiagramNodeProps) {
  return (
    <Shape
      {...SITE_SHARED}
      {...props}
      _style={extendStyle(SITE_SHARED, props)}
    />
  )
}
