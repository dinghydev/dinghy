import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSLATE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.translate',
  },
  _original_width: 68.4,
  _original_height: 67,
}

export function Translate(props: DiagramNodeProps) {
  return (
    <Shape {...TRANSLATE} {...props} _style={extendStyle(TRANSLATE, props)} />
  )
}
