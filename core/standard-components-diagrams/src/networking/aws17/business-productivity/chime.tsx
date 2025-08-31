import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHIME = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.chime;fillColor=#03B5BB;gradientColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Chime(props: DiagramNodeProps) {
  return <Shape {...CHIME} {...props} _style={extendStyle(CHIME, props)} />
}
