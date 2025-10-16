import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INSTAPAPER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.instapaper',
  },
  _width: 27.6,
  _height: 70.2,
}

export function Instapaper(props: DiagramNodeProps) {
  return (
    <Shape {...INSTAPAPER} {...props} _style={extendStyle(INSTAPAPER, props)} />
  )
}
