import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CITRIX_HDX = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.citrix_hdx;',
  },
  _original_width: 77.5,
  _original_height: 41,
}

export function CitrixHdx(props: DiagramNodeProps) {
  return (
    <Shape {...CITRIX_HDX} {...props} _style={extendStyle(CITRIX_HDX, props)} />
  )
}
