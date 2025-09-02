import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.mobile;pointerEvents=1;',
  },
  _original_width: 35,
  _original_height: 50,
}

export function Mobile(props: DiagramNodeProps) {
  return <Shape {...MOBILE} {...props} _style={extendStyle(MOBILE, props)} />
}
