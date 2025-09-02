import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSTAPAPER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.instapaper',
  },
  _original_width: 27.6,
  _original_height: 70.2,
}

export function Instapaper(props: DiagramNodeProps) {
  return (
    <Shape {...INSTAPAPER} {...props} _style={extendStyle(INSTAPAPER, props)} />
  )
}
