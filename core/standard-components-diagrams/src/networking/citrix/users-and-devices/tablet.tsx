import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLET = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.tablet;',
  },
  _original_width: 36.925000000000004,
  _original_height: 50,
}

export function Tablet(props: DiagramNodeProps) {
  return <Shape {...TABLET} {...props} _style={extendStyle(TABLET, props)} />
}
