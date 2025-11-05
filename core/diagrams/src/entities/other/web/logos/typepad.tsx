import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TYPEPAD = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.typepad;fillColor=#ADB560;strokeColor=none',
  },
  _width: 64.8,
  _height: 38.400000000000006,
}

export function Typepad(props: NodeProps) {
  return <Shape {...TYPEPAD} {...props} _style={extendStyle(TYPEPAD, props)} />
}
