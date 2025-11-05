import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.mobile;pointerEvents=1;',
  },
  _width: 35,
  _height: 50,
}

export function Mobile(props: NodeProps) {
  return <Shape {...MOBILE} {...props} _style={extendStyle(MOBILE, props)} />
}
