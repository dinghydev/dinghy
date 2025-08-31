import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSTAPAPER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.instapaper;fillColor=#807E7E;gradientColor=#1B1C1C',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Instapaper(props: DiagramNodeProps) {
  return (
    <Shape {...INSTAPAPER} {...props} _style={extendStyle(INSTAPAPER, props)} />
  )
}
