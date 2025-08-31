import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIMEO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.vimeo;fillColor=#A4EDF9;gradientColor=#2B8ED9',
  _width: 102.4,
  _height: 102.4,
}

export function Vimeo(props: DiagramNodeProps) {
  return <Shape {...VIMEO} {...props} _style={extendStyle(VIMEO, props)} />
}
