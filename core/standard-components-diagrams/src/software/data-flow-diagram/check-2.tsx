import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHECK_2 = {
  _style: {
    entity: 'html=1;dashed=0;whiteSpace=wrap;shape=mxgraph.dfd.check2',
  },
  _original_width: 100,
  _original_height: 50,
}

export function Check2(props: DiagramNodeProps) {
  return <Shape {...CHECK_2} {...props} _style={extendStyle(CHECK_2, props)} />
}
