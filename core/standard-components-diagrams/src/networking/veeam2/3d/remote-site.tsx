import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REMOTE_SITE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.remote_site;',
  _width: 46,
  _height: 60,
}

export function RemoteSite(props: DiagramNodeProps) {
  return (
    <Shape
      {...REMOTE_SITE}
      {...props}
      _style={extendStyle(REMOTE_SITE, props)}
    />
  )
}
