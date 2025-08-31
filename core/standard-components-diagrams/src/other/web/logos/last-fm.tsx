import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAST_FM = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.last.fm;fillColor=#F33543;gradientColor=#BD0E11',
  _width: 83.2,
  _height: 50,
}

export function LastFm(props: DiagramNodeProps) {
  return <Shape {...LAST_FM} {...props} _style={extendStyle(LAST_FM, props)} />
}
